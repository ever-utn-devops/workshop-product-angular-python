from flask_restful import Resource
from flask import request
from utils.server_response import *
from utils.message_codes import *
import logging
from bson.errors import InvalidId
from models.product.model import ProductModel

class ProductByIdController(Resource):
    route = "/product/<string:code>"

    def get(self, code):
        try:
            product = ProductModel.get_by_code(code)
            if not product:
                return ServerResponse(
                    data={},
                    message="No product found",
                    message_code=NO_DATA,
                    status=StatusCode.OK
                )
            
            product["_id"] = str(product["_id"])
            return ServerResponse(data=product, message="Successfully request", status=StatusCode.OK)
        except Exception as ex:
            return ServerResponse(status=StatusCode.INTERNAL_SERVER_ERROR)