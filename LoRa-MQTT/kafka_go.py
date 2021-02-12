import paho.mqtt.client as mqtt
from datetime import datetime
from kafka import KafkaProducer


def on_connect(client, userdata, flags, rc):
    print("MQTT conectado. Cod:  " + str(rc))
    client.subscribe("/ibti/kafkaout")

def on_message(client, userdata, msg):
    message = ''
    message = str(msg.payload.decode("utf-8"))
    print(message)
    print("####")
    producer = KafkaProducer(bootstrap_servers='localhost:9092')
    producer.send('ibti', bytes(message, 'utf-8'))

client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

client.connect("18.217.92.215", 1883, 60)

client.loop_forever()
