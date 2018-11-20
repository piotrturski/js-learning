console.log('hello world')

var app = require('./infrastructure/server'),
  port = process.env.PORT || 3000;
  
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
