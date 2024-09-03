'use strict';

let model = require('../models/productModel')

exports.list_all_products = function(req, res) { 
    //res.json(model.get_all()); 
    res.status(200).send(model.get_all());
};

exports.read_a_product = function(req, res) {
    products = model.get_all()
    let product = products.filter(item => item.productId == req.params.productId);
    if (product.length > 0){
        res.status(200).send(product);
    }else
        res.status(404).send({ success: 'false', message: 'Product not found' });
};

exports.create_a_product = function(req, res) {
    if (req.body.productId == undefined || req.body == null || req.body.length == 0 || req.body == ''){
        res.status(404).send({ success: 'false', message: 'Must provide the product info to save it.' });
        return;
    }

    let product = products.filter(item => item.productId == req.body.productId);
    if (product.length > 0){
        res.status(404).send({ success: 'false', message: 'The product is already stored. Specify another one.' });
        return;
    }

    let newproduct = {
        productId: req.body.productId,
        productName: req.body.productName,
        releaseDate: req.body.releaseDate,
        price: req.body.price,
        description: req.body.description,
        starRating: req.body.starRating,
        imageUrl: req.body.imageUrl
    };
    products.push(newproduct);
    if (!model.create(newproduct))
        res.status(200).send();
    else
        res.status(500).send({ success: 'false', message: 'The product is duplicate.' });
};

// exports.update_a_product = function(req, res) {
//     if (req.body.productId == undefined || req.body == null || req.body.length == 0 || req.body == ''){
//         res.status(404).send({ success: 'false', message: 'Must provide the product info to save it.' });
//         return;
//     }

//     const index = products.findIndex(x => x.productId == req.body.productId);
//     if (index == undefined || index == -1){
//         res.status(404).send({ success: 'false', message: 'The product does not exist. Specify a product that is already stored.' });
//         return;
//     }
//     products.splice(index, 1);

//     let newproduct = {
//         productId: req.body.productId,
//         productName: req.body.productName,
//         releaseDate: req.body.releaseDate,
//         price: req.body.price,
//         description: req.body.description,
//         starRating: req.body.starRating,
//         imageUrl: req.body.imageUrl
//     };

//     products.push(newproduct);
//     res.status(200).send(newproduct);
// };

exports.delete_a_product = function(req, res) {
    products = model.get_all()
    if (req.params.productId == undefined || req.params.productId == null || req.params.productId.length == 0){
        res.status(404).send({ success: 'false', message: 'Must provide the product to delete it.' });
        return;
    }

    const index = products.findIndex(x => x.productId == req.params.productId);
    if (index == undefined || index == -1){
        res.status(404).send({ success: 'false', message: 'The product does not exist. Specify a product that is already stored.' });
        return;
    }
    let deletedproduct = products[index];
    products.splice(index, 1);
    res.status(200).send(model.remove(req.params.productId));
};

// exports.update_products = function(req, res) {
//     if (req.body == undefined || req.body == null || req.body.length == 0 || req.body == ''){
//         res.status(404).send({ success: 'false', message: 'Must provide the products info to save them.' });
//         return;
//     }

//     let tempproducts=[];
//     req.body.forEach(element => {
//         let newproduct = {
//             productId: element.productId,
//             productName: element.productName,
//             releaseDate: element.releaseDate,
//             price: element.price,
//             description: element.description,
//             starRating: element.starRating,
//             imageUrl: element.imageUrl
//         };
//         tempproducts.push(newproduct);
//     });
    
//     products.splice(0, products.length);
//     tempproducts.forEach(element => {
//         products.push(element);
//     });
//     res.status(200).send(products);
// };