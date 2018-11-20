var express = require('express'),
  app = express()

require('../big-module').routes(app)

module.exports=app

console.log('express server created');