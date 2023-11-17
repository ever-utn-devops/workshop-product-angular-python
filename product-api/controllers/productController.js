'use strict';

const products =  [
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2019",
        "price": 32.99,
        "description":"15 gallon capacity rolling garden cart",
        "starRating": 5,
        "imageUrl": "assets/images/garden.jpg"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2019",
        "price": 8.9,
        "description": "Curved claw steel hammer",
        "starRating": 4.6,
        "imageUrl": "assets/images/hammer.jpg"
    },
    {
        "productId":7,
        "productName": "Drill",
        "productCode": "PRX-095",
        "releaseDate": "Sept 2nd, 2019",
        "price": 32.9,
        "description":"",
        "starRating": 3.2,
        "imageUrl":"assets/images/drill.jpg"
    },
    {
        "productId":8,
        "productName": "Screwdriver",
        "productCode": "SCWD-077",
        "releaseDate": "Oct 3rd, 2021",
        "price": 32.9,
        "description":"",
        "starRating": 4.2,
        "imageUrl":""
    }
];

exports.list_all_products = function(req, res) {  
    res.status(200).send(products);
};

exports.read_a_product = function(req, res) {
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
    res.status(200).send(products);
};

exports.update_a_product = function(req, res) {
    if (req.body.productId == undefined || req.body == null || req.body.length == 0 || req.body == ''){
        res.status(404).send({ success: 'false', message: 'Must provide the product info to save it.' });
        return;
    }

    const index = products.findIndex(x => x.productId == req.body.productId);
    if (index == undefined || index == -1){
        res.status(404).send({ success: 'false', message: 'The product does not exist. Specify a product that is already stored.' });
        return;
    }
    products.splice(index, 1);

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
    res.status(200).send(newproduct);
};

exports.delete_a_product = function(req, res) {
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
    res.status(200).send(deletedproduct);
};

exports.update_products = function(req, res) {
    if (req.body == undefined || req.body == null || req.body.length == 0 || req.body == ''){
        res.status(404).send({ success: 'false', message: 'Must provide the products info to save them.' });
        return;
    }

    let tempproducts=[];
    req.body.forEach(element => {
        let newproduct = {
            productId: element.productId,
            productName: element.productName,
            releaseDate: element.releaseDate,
            price: element.price,
            description: element.description,
            starRating: element.starRating,
            imageUrl: element.imageUrl
        };
        tempproducts.push(newproduct);
    });
    
    products.splice(0, products.length);
    tempproducts.forEach(element => {
        products.push(element);
    });
    res.status(200).send(products);
};