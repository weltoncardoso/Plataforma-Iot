import paho.mqtt.client as mqtt
import base64
import struct
import json
import pymongo
from datetime import datetime
import decoder

myclient = pymongo.MongoClient("mongodb://ibti:%23ibti%402021@localhost:27017/")
mydb = myclient["testeProjeto"]
mycol = mydb["sensorTemperatura"]
mycol2 = mydb["gps"]
col_dev = mydb["devices"]
col_types = mydb["tipos"]

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
    message = ''
    message = str(msg.payload.decode("utf-8"))
    print(message)
    print("####")
    print(type(message))
    payload = json.loads(message)

    dev = payload["meta"]["device"]
    tipo = ""
    processar = False

    for i in lista_dispositivos:
        if dev in i["device"]:
            tipo = i["type"]
            processar = True
            
    if processar:

        for i in lista_tipos:
            if tipo in i["name"]:
                saida = decoder.Decode.decode(message, i)
                saida_json = "{\"device\":" + str(dev) + ", " + saida
                y = on_publish(client2, "/ibti/kafkaout", saida_json)
                print (saida_json)
                break

client = mqtt.Client("sub2")
client.connect("localhost", 1883, 60)
client.on_connect = on_connect
client.on_message = on_message

client.loop_forever()
