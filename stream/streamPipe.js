var fs=require('fs');
var path=require('path');
//管道流
//管道提供了一个输出流到输入流的机制。通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
console.log(__dirname.toString());
// var readerStream=fs.createReadStream(path.resolve(__dirname,'input.txt'));

// var writeStream=fs.createWriteStream(path.resolve(__dirname,'output.txt'));

// readerStream.pipe(writeStream);

// writeStream.on('finish',function(){
//     console.log('一个流中获取数据并将数据传递到另外一个流中');
// })
