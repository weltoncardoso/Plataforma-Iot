from pydantic import BaseModel

class Gps (BaseModel):
  _id: str
  device: str
  ts: float
  counter: int
  lat: float
  long: float
  bateria: float

class SensorTemperatura (BaseModel):
  _id: str
  ts: float
  counter: int
  temperatura: float
  umidade: float
  bateria: float