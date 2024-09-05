from db.mongo_client import Connection
from decouple import config

dbmanager = Connection(config('PRODUCT_COLLECTION'))