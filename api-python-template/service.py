from flask_restful import Resource
from controllers.health.controller import HealthController
from controllers.product.controller import ProductController
from controllers.product.productByIdController import ProductByIdController
from flask_restful import Api


def addServiceLayer(api: Api):
    # Health
    api.add_resource(HealthController, HealthController.route)

    # Product
    api.add_resource(ProductController, ProductController.route)
    api.add_resource(ProductByIdController, ProductByIdController.route)
    

