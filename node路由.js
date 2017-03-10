//node.js路由
const http=require('http');
const url =require('url');
function start(){
	function onRequest(resquest,response){
		var pathname=url.parse(request.url).pathname;
		console.log("Request for"+pathname+"received.");
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("hello world");
		response.end();

	}
	http.createServer(onRequest).listen(8888);
	console.log("server has start");
}
exports.start=start;
