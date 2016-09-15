var config = require('../config');

var path = require('path')

var bodyParser = require('body-parser');

var express = require('express'),
    app = express(),

    server = require('http').createServer(app),

 //   io = require('socket.io').listen(server),
    users = [];
//specify the html we will use
app.use('/', express.static(path.resolve(__dirname,'..') + '/www'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

server.listen(process.env.PORT || config.webport);//publish to heroku

module.exports = app;









