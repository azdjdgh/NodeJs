var fs = require("fs");

var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('程序执行结束，阻塞方法');

console.log('------------------------------------------------')

var data = fs.readFile('input.txt', function (err, data) {
    console.log(data.toString());
});
console.log('程序执行结束，非阻塞的方法');
