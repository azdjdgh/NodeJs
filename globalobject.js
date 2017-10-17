console.log(__filename);
console.log(__dirname);

//测试setTimeout
function pritnHelloWorld() {
    console.log('hellowolrd');
}
var t = setTimeout(pritnHelloWorld, 3000);

//测试清除定时器
clearTimeout(t);


//测试setInterval
var t1=setInterval(pritnHelloWorld,2000);

//
clearInterval(t1);





process.on('exit',function(){

    console.log('程序退出');
})