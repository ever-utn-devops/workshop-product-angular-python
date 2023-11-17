'use strict';
module.exports = function(app) {
  var sales = require('../controllers/salesController');

  // todoList Routes
 app.route('/sales')
    .get(sales.getAllSales)
    .post(sales.create_a_sale);

  app.route('/sales/:productId')
     .get(sales.validateAProduct);

}