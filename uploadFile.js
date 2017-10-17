var express = require('express');
var fs = require('fs');
var bodyPareser = require('body-parser');
var multer = require('multer');

var app = express();
app.use(express.static('public'));
app.use(bodyPareser.urlencoded({ extended: false }));
app.use(multer({ dest: '/temp/' }).array('image'));

app.get('/uploadFile.htm', function (req, res) {
    res.sendFile(__dirname + "/" + "uploadFile.htm");
});

app.post('/file_upload', function (request, response) {
    console.log(request.files[0]);
    var dest_file=__dirname+'/'+request.files[0].originalname;
    fs.readFile(request.files[0].path,function(err,data){
        fs.writeFile(dest_file,data,function(err){
            if(err){
                console.log(err);
            }else{
                res = {
                    message:'File uploaded successfully', 
                    filename:request.files[0].originalname
               };
            }
            response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            response.end(JSON.stringify(res));
        });
    });
});

var server = app.listen(8081, function () {
    console.log('服务启动');
})