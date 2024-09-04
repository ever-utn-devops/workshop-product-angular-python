from flask_restful import Resource
from flask import request
from utils.server_response import *
from utils.message_codes import *
import logging
from bson.errors import InvalidId
from models.product.model import ProductModel

class ProductController(Resource):
    route = "/product"

    def get(self):
        try:
            products = ProductModel.get_all()

            if not products:
                return ServerResponse(
                    data={},
                    message="No products found",
                    message_code=NO_DATA,
                    status=StatusCode.OK
                )
            
            for prod in products:
                prod["_id"] = str(prod["_id"])

            return ServerResponse(data=products, status=StatusCode.OK)
        except Exception as ex:
            return ServerResponse(status=StatusCode.INTERNAL_SERVER_ERROR)
        
    def post(self):
        try:
            data = request.get_json()

            if not data.get("productCode"):
                return ServerResponse(message="Product Code is required", 
                                      message_code=INCORRECT_REQUEST_PARAM,
                                      status=StatusCode.NO_CONTENT)
            if not data.get("productName"):
                return ServerResponse(message="Product Name is required", 
                                      message_code=INCORRECT_REQUEST_PARAM,
                                      status=StatusCode.NO_CONTENT)
        
            if not data.get("price"):
                return ServerResponse(message="Price is required", 
                                      message_code=INCORRECT_REQUEST_PARAM,
                                      status=StatusCode.NO_CONTENT)
            
            if not data.get("description"):
                return ServerResponse(message="Descripcion is required", 
                                      message_code=INCORRECT_REQUEST_PARAM,
                                      status=StatusCode.NO_CONTENT)
            
            if not data.get("starRating"):
                return ServerResponse(message="Rating is required", 
                                      message_code=INCORRECT_REQUEST_PARAM,
                                      status=StatusCode.NO_CONTENT)
            
            if not data.get("imageUrl"):
                return ServerResponse(message="Image URL is required", 
                                      message_code=INCORRECT_REQUEST_PARAM,
                                      status=StatusCode.NO_CONTENT)
            
            prod_exists = ProductModel.get_by_code(data.get("productCode"))
            if prod_exists:
                return ServerResponse(message="No allow to insert duplicate product.", 
                                      message_code=CONFLICT_MSG,
                                      status=StatusCode.CONFLICT)
            product = ProductModel.create(data)
            return ServerResponse(data=product.to_dict(), message="Product successfully created", status=StatusCode.OK)
        except Exception as ex:
            return ServerResponse(status=StatusCode.INTERNAL_SERVER_ERROR)