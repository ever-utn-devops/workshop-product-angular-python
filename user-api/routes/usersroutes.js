'use strict';
module.exports = function(app) {
  var auth = require('../controllers/AuthController');

  // todoList Routes

  //app.route('/api/auth/:username/:password')
  app.route('/auth')
     .post(auth.authUser);

  app.route('/users')
    .get(auth.list_all_users);
  
  app.route('/users/:userName')
    .get(auth.get_an_user);
};