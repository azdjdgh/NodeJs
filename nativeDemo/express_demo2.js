var express = require('express');
var app = express();

//  主页输出 "Hello World"
app.get('/', function (request, response) {
    console.log('主页Get请求')
    response.send('Hello Get');
});

//  POST 请求
app.post('/',function(request,response){
    console.log('主页Post请求');
    response.send("Hello Post");
});

//  /del_user 页面响应
app.get('/del_user',function(request,response){
    console.log(".del_user响应Delete请求");
    response.send("删除用户");
});

//  /list_user 页面 GET 请求
app.get('/list_user',function(request,response){
    console.log('/list_user GET 请求');
    response.send('获取用户列表');
});

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd',function(request,response){
    console.log('/ab*cd GET 请求');
    response.send('正则匹配');
});

var server=app.listen(8081,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log('服务启动：http://%s:%s',host,port);
});