from fastapi import APIRouter
from .collections import *
from .db import *

router = APIRouter ()

@router.get ('/rhf')
async def rhf ():
  res = []
  collection = MongodbConnector ().get_collection ('sensorTemperatura')
  
  for x in collection.find ().sort ('counter', -1):
    res.append (SensorTemperatura (**x))
  
  return res

@router.get ('/rhf/{number}')
async def rhf (number: int):
  res = []
  collection = MongodbConnector ().get_collection ('sensorTemperatura')
  
  i = 0
  query = collection.find ().sort ('counter', -1).limit (number)
  for x in query:
    res.append (SensorTemperatura (**x))
  
  return res

@router.get ('/gps')
async def gps ():
  res = []
  collection = MongodbConnector ().get_collection ('gps')

  for x in collection.find ().sort ('counter', -1):
    res.append (Gps (**x))

  return res

@router.get ('/gps/{number}')
async def gps (number: int):
  res = []
  collection = MongodbConnector ().get_collection ('gps')

  for x in collection.find ().sort ('counter', -1).limit (number):
    res.append (Gps (**x))

  return res