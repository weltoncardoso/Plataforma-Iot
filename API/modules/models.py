from pydantic import BaseModel
from typing import Optional, Set

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



class Adr (BaseModel):
  tx_power: Optional [int] = None
  datarate: Optional [int] = None
  mode: str

class Device (BaseModel):
  _id: str
  dev_eui: str
  app_eui: str
  tags: Set [str] = set ()
  activation: str
  encryption: str
  dev_addr: str
  nwkskey: str
  appskey: str
  dev_class: str
  counters_size: int
  adr: Adr
  band: str