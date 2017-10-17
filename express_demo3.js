var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (request, response) {
    response.send('hello world');
})

var server = app.listen(8081, function () {
    console.log('服务启动');
})