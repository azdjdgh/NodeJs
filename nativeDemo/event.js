//引入events模块
var event=require("events");
//创建eventEmitter对象
var eventEmitter=new event.EventEmitter();
eventEmitter.on("event_some",function(){
    console.log('event_some 事件触发');
});

setTimeout(function() {
    eventEmitter.emit('event_some');
}, 1000);
