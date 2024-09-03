'use strict';

var _ = require('underscore');
var util = require('../util/util');
var jsonFile = './data/product.json';

let containersdata = JSON.parse(util.readFile(jsonFile));

exports.get_all = function(re, res){
    return containersdata;
};

exports.get_by_id = function(conId, res){
    var filtered = _.where(containersdata, {id: conId});
    return filtered;
};

exports.create = function(re, res){
    var code=0;
    var message= '';
    var data=null;
    var list = this.get_by_id(re.productId);
    if (list.length > 0){
        message = 'Duplicate data is not allowed. The container is already stored. Try to insert another one.';
        code = -1;
        return false
    }else{
        containersdata.push(re);        
        util.writeFile(JSON.stringify(containersdata), jsonFile);
        data = re;
    }
    return {
        data: data,
        responseCode: code,
        message: message
    };
};

exports.remove = function(conId, res){
    var code=0;
    var message= '';
    var data = null;
    var list = this.get_by_id(conId);
    if (list.length > 0){
        containersdata = containersdata.filter((el) => {
            return el.id !== list[0].id;
          });
        util.writeFile(JSON.stringify(containersdata), jsonFile);
        data = list[0];
    }else{        
        message = 'The information was not found to be removed.';
        code = -1;
    }
    return {
        data: data,
        responseCode: code,
        message: message
    };
};