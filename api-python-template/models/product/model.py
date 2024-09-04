from bson import ObjectId
from bson.errors import InvalidId
from models.product.db_queries import __dbmanager__
import logging

class ProductModel:
    def __init__(self, productCode=None, productName=None, price=0, description=None,
                 starRating=0, imageUrl=None):
        self.productCode = productCode
        self.productName = productName
        self.price = price
        self.description = description
        self.starRating = starRating
        self.imageUrl = imageUrl
    
    def to_dict(self):
        return {
            "productCode": self.productCode,
            "productName": self.productName,
            "price": self.price,
            "description": self.description,
            "starRating": self.starRating,
            "imageUrl": self.imageUrl
        }

    @classmethod
    def get_all(cls):
        products = []
        try:
            response = __dbmanager__.get_all_data()
            for item in response:
                products.append(item)

        except Exception as ex:
            raise Exception(ex)
        
        return products
    
    @classmethod
    def create(cls, data):
        try:
            product = cls(**data)
            __dbmanager__.create_data(product.to_dict())
            return product
        except Exception as ex:
            raise Exception(ex)
    
    @classmethod
    def get_by_code(cls, code):
        try:
            return __dbmanager__.get_by_query_one({"productCode":code})
        except Exception as ex:
            raise Exception(ex)