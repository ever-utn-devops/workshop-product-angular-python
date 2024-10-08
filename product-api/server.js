require('dotenv').config();

var express = require('express'),
  app = express(),
  port = process.env.PRODUCT_PORT || 3006,
  bodyParser = require('body-parser');

  console.log(process.env.PRODUCT_PORT)

const cors = require('cors');

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./routes/productroutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);