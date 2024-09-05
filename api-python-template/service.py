from flask_restful import Resource
from controllers.health.controller import HealthController
from controllers.product.productController import ProductController
from controllers.product.productByCodeController import ProductByCodeController
from flask_restful import Api


def addServiceLayer(api: Api):
    # Health
    api.add_resource(HealthController, HealthController.route)

    #Product
    api.add_resource(ProductController, ProductController.route)
    api.add_resource(ProductByCodeController, ProductByCodeController.route)
