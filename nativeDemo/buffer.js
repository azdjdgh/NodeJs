var buffer=new Buffer(26);
for (var index = 0; index < buffer.length; index++) {
    buffer[index]=index+97;
}
console.log(buffer.toString('ascii'));
console.log(buffer.toString('ascii',0,5));
console.log(buffer.toString('utf8',0,5));
console.log(buffer.toString(undefined,0,5));

console.log('---------------------------------\n');

//將Buffer转换为JSON对象
var josn=buffer.toJSON();
console.log(josn);

console.log('---------------------------------\n');