var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/index.htm', function (request, response) {
    response.sendFile(__dirname + '/index1.htm');
});

app.post('/process_post', urlencodedParser, function (request, response) {
    var res = { 'first_name': request.body.first_name, 'last_name': request.body.last_name };
    response.end(JSON.stringify(res));
});

var server = app.listen(8081, function () {
    console.log('服务启动');
})