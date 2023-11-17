'use strict';
const axios = require('axios');
const { PRODUCT_API_INTERNAL_URL } = require('../config');

exports.get_product_by_id = async function(productId){
    let url = PRODUCT_API_INTERNAL_URL + '/' + productId;
    console.log("****************************");
    console.log(url);
    console.log("****************************");
    let response = await axios({
        method:'get',
        url
    });

    console.log(response.data);

    //if (response.data){
        return response.data;
    //}else{

    //}

    /*}else{
        if (error.data){
            console.log(error.data);
        }else
             console.log(error);

        throw error;*?
    }

    /*await axios({
        method:'get',
        url
    })
    .then(function (response) {
        //console.log(response.data);
        return response.data;
    })
    .catch(function (error) {
        if (error.data){
            console.log(error.data);
        }else
             console.log(error);

        throw error;
    });*/
};

/*exports.users_get_all = function(req, res){
    let url = AUTH_API_INTERNAL_URL;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
};

exports.users_get_by_id = function(req, res){
    let url = AUTH_API_INTERNAL_URL + '/' + req.params.id;
    axios({
        method:'get',
        url
    })
    .then(function (response) {
        res.send(response.data);
    })
    .catch(function (error) {
        console.log(error);
    });
};

exports.status = function(req, res){
    res.send('Proxy is running');
}; 
*/