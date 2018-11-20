console.log('hello world')

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

require('./big-module').routes(app)
  
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

module.exports=app