//node.js函数
function say(word){
	console.log(word);
}
function execute(someFunction,value){
	someFunction(value);
}
//定义好的函数做参数
execute(say,"nihao");
//匿名函数传参
execute(function(word){console.log(word)},"hello");
//http服务器模块
const http = require('http');
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write('hello');
	response.end();
}).listen(8888);