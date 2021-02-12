import paho.mqtt.client as mqtt
import base64
import struct
import json
import pymongo
from datetime import datetime

myclient = pymongo.MongoClient("mongodb://ibti:%23ibti%402021@localhost:27017/")
mydb = myclient["testeProjeto"]
mycol = mydb["sensorTemperatura"]
mycol2 = mydb["gps"]

def on_connect(client, userdata, flags, rc):
    print("MQTT conectado. Cod:  "+str(rc))
    client.subscribe("ibti/#")

def on_message(client, userdata, msg):
    message = ''
    message = str(msg.payload.decode("utf-8"))
    print(message)
    print("####")
    print(type(message))
    payload = json.loads(message)
    if (("uplink" in payload["type"]) and ("08c0f90570400000" in payload["meta"]["device"])):
        counter = payload["params"]["counter_up"]
        ts = payload["meta"]["time"]
        time_stamp = datetime.fromtimestamp(ts)
        print("-- " + str(time_stamp.hour) + ":" + str(time_stamp.minute) + ":" + str(time_stamp.second) + " - " + str(time_stamp.day) + "/" + str(time_stamp.month) + "/" + str(time_stamp.year) + " --")
        print("Contador: " +  str(counter))
        print("Payload recebido: " +  payload["params"]["payload"])
        payload_bytes = (base64.b64decode(payload["params"]["payload"]))
#        payload_bytes_hex = payload_bytes.encode("hex")
#        print("Payload hex: " +  str(payload_bytes_hex))
        temp = struct.unpack("<h", payload_bytes[1].to_bytes(1, byteorder='big')+payload_bytes[2].to_bytes(1, byteorder='big'))[0]
        temp = (temp*175.72/65536)-46.85
        print("Temperatura: " + str(temp) + "C")
        zero = 0
        hum = struct.unpack("<h", payload_bytes[3].to_bytes(1, byteorder='big')+zero.to_bytes(1, byteorder='big'))[0]
        hum = (125.0/256.0*hum - 6.0)
        print("Umidade: " + str(hum) + "%")
        period = struct.unpack("<h", payload_bytes[4].to_bytes(1, byteorder='big')+payload_bytes[5].to_bytes(1, byteorder='big'))[0] * 2
        print("Periodo: " + str(period) + "s")
        bateria = (struct.unpack("<h", payload_bytes[8].to_bytes(1, byteorder='big')+zero.to_bytes(1, byteorder='big'))[0] + 200) * 0.01
        print("Bateria: " + str(bateria) + "V")

        payload_json_str = {
            "ts": ts,
            "counter": counter,
            "temperatura": temp,
            "umidade": hum,
            "bateria": bateria
        }

        saida_json = json.dumps(payload_json_str)
        print("Saida: ")
        print(saida_json)

        print("-- Fim de Pacote --")

        x = mycol.insert_one(payload_json_str)
        
    elif (("uplink" in payload["type"]) and (("98bb0a3a36f2e3e7" in payload["meta"]["device"]) or ("949e1a494f73aaaf" in payload["meta"]["device"]) or ("48bec18e0405f370" in payload["meta"]["device"]) or ("588e6b7a7410c18e" in payload["meta"]["device"]))):
        counter = payload["params"]["counter_up"]
        ts = payload["meta"]["time"]
        time_stamp = datetime.fromtimestamp(ts)
        print("-- " + str(time_stamp.hour) + ":" + str(time_stamp.minute) + ":" + str(time_stamp.second) + " - " + str(time_stamp.day) + "/" + str(time_stamp.month) + "/" + str(time_stamp.year) + " --")
        print("Contador: " +  str(counter))
        print("Payload recebido: " +  payload["params"]["payload"])
        payload_bytes = (base64.b64decode(payload["params"]["payload"]))
        
        lat = int.from_bytes(payload_bytes, byteorder = "big")
        lat = lat >> 56
        lat -= 0x100000000
        lat /= 1000000.0
		
        if (lat < -100 or lat > 100):
            lat = 0
			
	    
        long = int.from_bytes(payload_bytes[4:len(payload_bytes)], byteorder = "big")
        long = long >> 24
        long -= 0x100000000
        long /= 1000000.0
		
        if (long < -100 or long > 100):
            long = 0
        
        bat = int.from_bytes(payload_bytes[8:len(payload_bytes)], byteorder = "big")
        bat = bat >> 8
        bat /= 1000.0
        
        time_stamp = datetime.fromtimestamp(ts)
        time_str = str(time_stamp.hour) + ":" + str(time_stamp.minute) + ":" + str(time_stamp.second) + " - " + str(time_stamp.day) + "/" + str(time_stamp.month) + "/" + str(time_stamp.year)
        
		
        payload_json_str ={
            "device": payload["meta"]["device"],
            "ts": ts,
            "time": time_str,
            "counter": counter,
            "lat": lat,
            "long": long,
            "bateria": bat
        }
        
        saida_json = json.dumps(payload_json_str)
        print("Saida: ")
        print(saida_json)

        print("-- Fim de Pacote --")

        x = mycol2.insert_one(payload_json_str)


client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("broker.hivemq.com", 1883, 60)

client.loop_forever()
