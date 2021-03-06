from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from modules.router import router
from modules.db import MongodbConnector

app = FastAPI ()

origins = ['*']
app.add_middleware (CORSMiddleware, allow_origins = origins, allow_credentials = True, allow_methods = ['*'], allow_headers = ['*'])
app.include_router (router)

address = 'mongodb://ibti:%23ibti%402021@18.217.92.215:27017/'
database = 'testeProjeto'
connector = MongodbConnector ().connect (address, database)

@app.get ('/')
async def root ():
  return {
    'year': 2021,
    'location': 'IBTI'
  }