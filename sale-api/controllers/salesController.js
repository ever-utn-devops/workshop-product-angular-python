'use strict';

var salesService = require('../services/salesService');

const sales =  [
   
];

exports.validateAProduct = function(req, res) {
    
    /*try {
        let product =  salesService.get_product_by_id(req.params.productId);
        console.log(product);
        if (product !== null || product.length > 0){
            res.status(200).send(product);            
        }
        else
            res.status(404).send({ success: 'false', message: 'Product not found' });

    } catch (error) {
        res.status(404).send({ success: 'false', message: 'Product not found' });
    }*/
    

    salesService.get_product_by_id(req.params.productId)
    .then(function(data){
        console.log('product:');
        console.log(data);
        if (data.length > 0){        
            res.status(200).send(data);
        }else
            res.status(404).send({ success: 'false', message: 'Product not found' });
    
    })    
    .catch(function(error){
        console.log(error)
        res.status(404).send({ success: 'false', message: 'Error. Product not found' });
    });
};

exports.create_a_sale = function(req, res) {
    if (req.body.productId == undefined || req.body == null || req.body.length == 0 || req.body == ''){
        res.status(404).send({ success: 'false', message: 'Must provide the product info to save it.' });
        return;
    }

    let newSale = {
        productId: req.body.productId,
        saleDate: req.body.saleDate,
        userId: req.body.userId,
        customerName: req.body.customerName,
        quantity: req.body.quantity,
        unitPrice: req.body.unitPrice,
    };
    sales.push(newSale);
    res.status(200).send(newSale);
};

exports.getAllSales = function(req, res) {
    res.status(200).send(sales);
};

