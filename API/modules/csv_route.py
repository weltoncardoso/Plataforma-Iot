import json
import pandas
import warnings
from fastapi import APIRouter
from .db import *

csv_route = APIRouter ()
warnings.filterwarnings ('ignore')

@csv_route.get ('/csv/{collection}')
def csv (collection: str):
  collection = MongodbConnector ().get_collection (collection)
  mongo_docs = collection.find ()
  mongo_docs = list (mongo_docs)

  docs = pandas.DataFrame (columns = [])

  for num, doc in enumerate (mongo_docs):
    doc ['_id'] = str (doc ['_id'])
    doc_id = doc ['_id']
    series_obj = pandas.Series (doc, name = doc_id)
    docs = docs.append (series_obj)

  return docs.to_csv (path_or_buf = f'/{collection}.csv', sep = ',')
  