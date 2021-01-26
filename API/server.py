import modules.collections as collections
from fastapi import FastAPI
from pymongo import MongoClient

app = FastAPI ()
client = MongoClient ('mongodb://ibti:%23ibti%402021@18.217.92.215:27017/')
db = client ['testeProjeto']

@app.get ('/')
async def root ():
  return {
    'year': 2021,
    'location': 'IBTI'
  }

@app.get ('/rhf')
async def rhf ():
  res = []
  collection = db ['sensorTemperatura']
  
  for x in collection.find ():
    res.append (collections.SensorTemperatura (**x))
  
  return res

@app.get ('/rhf/{number}')
async def rhf_number (number: int):
  res = []
  collection = db ['sensorTemperatura']
  
  for x in collection.find ():
    res.append (collections.SensorTemperatura (**x))
  
  res.reverse ()
  return res [0 : number]

@app.get ('/gps')
async def gps ():
  res = []
  collection = db ['gps']

  for x in collection.find ():
    res.append (collections.Gps (**x))

  return res

@app.get ('/gps/{number}')
async def gps (number: int):
  res = []
  collection = db ['gps']

  for x in collection.find ():
    res.append (collections.Gps (**x))

  res.reverse ()
  return res [0 : number]