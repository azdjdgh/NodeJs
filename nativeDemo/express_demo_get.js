var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.htm', function (request, response) {
    response.sendFile(__dirname + '/index.htm');
});

app.get('/process_get', function (request, response) {
    var res = { 'first_name': request.query.first_name, 'last_name': request.query.last_name };
    response.end(JSON.stringify(res));
});

var server = app.listen(8081, function () {
    console.log('服务启动');
})