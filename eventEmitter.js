const events=require('events');//引入模块
const eventEmitter =new events.EventEmitter();//创建事件触发器对象eventEmitter
const connectHandler=function(){//创建事件处理程序
	console.log("连接成功");
}
//事件绑定
eventEmitter.on('connection',connectHandler);
//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function(){
	console.log('数据接收成功');
});
//事件触发
eventEmitter.emit('connection');
eventEmitter.emit('data_received');
console.log('程序执行完毕');
//绑定多参数函数
eventEmitter.on('some_event',function(arg1,arg2){
	console.log(arg1,arg2);
})
eventEmitter.emit('some_event','参数1','参数2');

//addListener(event,listener)
const one_addListerner=function(){
	console.log('我是事件监听器');
}
eventEmitter.addListener('listener_event',one_addListerner);

//once(event,listener)
server.once('once_event',function(stream){
	console.log('监听器最多触发一次，触发后立即解除');
});
