from flask_restful import Resource
from flask import request
from models.product.model import ProductModel
from utils.message_codes import *
from utils.server_response import *

class ProductController(Resource):
    route = "/product"

    def get(self):
        try:
            products = ProductModel.get_all()
            if not products:
                return ServerResponse(
                    data={},
                    message="Products were not found",
                    message_code= NO_DATA,
                    status=StatusCode.OK
                )
            return ServerResponse(
                    data=products,
                    message="Products were found",
                    message_code=OK_MSG,
                    status=StatusCode.OK
                )
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
                return ServerResponse(message="Description is required",
                                      message_code=INCORRECT_REQUEST_PARAM,
                                      status=StatusCode.NO_CONTENT)
            
            if not data.get("rating"):
                return ServerResponse(message="Rating is required",
                                      message_code=INCORRECT_REQUEST_PARAM,
                                      status=StatusCode.NO_CONTENT)
            
            if not data.get("imageUrl"):
                return ServerResponse(message="Rating is required",
                                      message_code=INCORRECT_REQUEST_PARAM,
                                      status=StatusCode.NO_CONTENT)
            
            prod_exists = ProductModel.get_by_code(data.get("productCode"))
            if prod_exists:
                return ServerResponse(message="No allow to insert duplicate product.",
                                      message_code=CONFLICT_MSG,
                                      status=StatusCode.CONFLICT)

            product = ProductModel.create(data)
            return ServerResponse(data=product.to_json(), 
                                  message="Product successfully created",
                                  status=StatusCode.OK)
        except Exception as ex:
            return ServerResponse(status=StatusCode.INTERNAL_SERVER_ERROR)