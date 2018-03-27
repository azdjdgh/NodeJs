var fs=require('fs');
var data='';


//从流中读取数据
console.log('---------------------------从流中读取数据');
//创建可读流
var readerStream=fs.createReadStream('input.txt');
//设置编码为utf8
readerStream.setEncoding('utf8');
// 处理流事件 --> data, end, and error
readerStream.on('data',function(chunk){
    data+=chunk;
});

readerStream.on('end',function(){
    console.log('读取完成，数据：'+data);
});

readerStream.on('error',function(error){
    console.log("");
});
console.log('程序执行完毕\n');




//写入流
console.log('---------------------------将数据写入流');
// 创建一个可以写入的流，写入到文件 output.txt 中
var writeStream=fs.createWriteStream('output.txt');
// 使用 utf8 编码写入数据
var writeData="测试文件写入";
writeStream.write(writeData,'utf8')
// 标记文件末尾
writeStream.end();
// 处理流事件 --> data, end, and error
writeStream.on('finish',function(){
    console.log('写入完成');
});
console.log('程序执行完毕\n');




