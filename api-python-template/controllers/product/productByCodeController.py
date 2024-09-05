from flask_restful import Resource
from flask import request
from models.product.model import ProductModel
from utils.message_codes import *
from utils.server_response import *

class ProductByCodeController(Resource):
    route = "/product/<string:code>"

    def get(self, code):
        try:
            product = ProductModel.get_by_code(code)
            if not product:
                return ServerResponse(
                    data={},
                    message="Product was not found",
                    message_code= NO_DATA,
                    status=StatusCode.OK
                )
            product["_id"] = str(product["_id"])
            return ServerResponse(
                    data=product,
                    message="Product wasfound",
                    message_code=OK_MSG,
                    status=StatusCode.OK
                )
        except Exception as ex:
            return ServerResponse(status=StatusCode.INTERNAL_SERVER_ERROR)
    