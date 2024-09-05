from models.product.db_queries import dbmanager
import logging

class ProductModel:
    def __init__(self, productCode=None, productName = None,
                    price=0, description=None, rating=0
                    , imageUrl=None):
        self.productCode = productCode
        self.productName=productName
        self.price=price
        self.description=description
        self.rating= rating
        self.imageUrl=imageUrl
    
    def to_json(self):
        return {
            "productCode": self.productCode,
            "productName": self.productName,
            "price": self.price,
            "description": self.description,
            "rating": self.rating,
            "imageUrl": self.imageUrl  
        }
    
    @classmethod
    def get_all(cls):
        products = []
        try:
            response = dbmanager.get_all_data()
            for item in response:
                item["_id"] = str(item["_id"])
                products.append(item)

        except Exception as ex:
                raise Exception(ex)
        
        return products
    
    @classmethod
    def create(cls, data):
        try:
             product = cls(**data)
             dbmanager.create_data(product.to_json())
             return product
        except Exception as ex:
             raise Exception(ex)
        
    @classmethod
    def get_by_code(cls, code):
        try:
             return dbmanager.get_by_query_one({"productCode":code})
        except Exception as ex:
             raise Exception(ex)