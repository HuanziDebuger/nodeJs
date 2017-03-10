//在服务器上添加路由
//
const http=require('http');
const url =require('url');
function start(route){
	function onRequest(request,response){
		var pathname=url.parse(request.url).pathname;
		console.log("Request for"+pathname+"receive.");
		route(pathname);
		response.writeHead(200,{'Content-Type':'text/plain'});
		response.write("hello huanzi");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log('server has start');
}
exports.start = start;