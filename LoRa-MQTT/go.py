import paho.mqtt.client as mqtt
import base64
import struct
import json
import pymongo
from datetime import datetime
import decoder

myclient = pymongo.MongoClient("mongodb://ibti:%23ibti%402021@localhost:27017/")
mydb = myclient["testeProjeto"]
mycol = mydb["dados"]
col_dev = mydb["devices"]
col_types = mydb["tipos"]
col_errors = mydb["logs"]

client2 = mqtt.Client("pub77")
client2.connect("localhost", 1883)

lista_dispositivos = []
lista_tipos = []
cursor = col_dev.find()
for i in cursor:
    lista_dispositivos.append(i)

cursor = col_types.find()
for i in cursor:
    lista_tipos.append(i)



def on_publish (client, topic, message):
    client.publish(topic, message)

def on_connect(client, userdata, flags, rc):
    print("MQTT conectado. Cod:  " + str(rc))
    client.subscribe("ibti/#")

def on_message(client, userdata, msg):
    global lista_dispositivos
    global lista_tipos

    message = ''
    message = str(msg.payload.decode("utf-8"))
    #print(message)
    #print("####")
    #print(type(message))

    if ("uplink" in message):
        payload = json.loads(message)

        dev = payload["meta"]["device"]
        tipo = ""
        processar = False

        for i in lista_dispositivos:
            if dev in i["device"]:
                tipo = i["type"]
                processar = True
                
        if processar:

            try:
                for i in lista_tipos:
                    if tipo in i["name"]:
                        saida = decoder.Decode.decode(message, i)
                        saida["device"] = str(dev)
                        print (str(saida))
                        #saida_mongodb = json.dumps(saida)
                        y = on_publish(client2, "/ibti/kafkaout", str(saida))
                        x = mycol.insert_one(saida)
                        break
            except Exception as e:
                print(e)
                saida_erro = {}
                time_stamp = datetime.now()
                saida_erro["erro"] = str(e)
                saida_erro["time"] = str(time_stamp.hour) + ":" + str(time_stamp.minute) + ":" + str(time_stamp.second) + " - " + str(time_stamp.day) + "/" + str(time_stamp.month) + "/" + str(time_stamp.year)
                x = col_errors.insert_one(saida_erro)

    elif ("atualizar listas" in message):
        print("##Atualizar##")
        lista_dispositivos = []
        lista_tipos = []
        cursor = col_dev.find()
        for i in cursor:
            lista_dispositivos.append(i)

        cursor = col_types.find()
        for i in cursor:
            lista_tipos.append(i)
        
        saida_log = {}
        time_stamp = datetime.now()
        saida_log["log"] = "listas atualizadas em " + str(time_stamp.hour) + ":" + str(time_stamp.minute) + ":" + str(time_stamp.second) + " - " + str(time_stamp.day) + "/" + str(time_stamp.month) + "/" + str(time_stamp.year)
        x = col_errors.insert_one(saida_log)

client = mqtt.Client("sub2")
client.connect("localhost", 1883, 60)
client.on_connect = on_connect
client.on_message = on_message

client.loop_forever()
client.disconnect()
client2.disconnect()