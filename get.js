//node get 请求
const http=require('http');
const url=require('url');
const util=require('util');
http.createServer(function(request,response){
	response.writeHead(200,{"Content":"text-plain"});
	//解析url参数
	var params = url.parse(request.url,true).query;
	var pathname=url.parse(request.url).pathname;
	console.log(params);
	console.log(pathname);
	response.write("网站名:"+params.name);
	response.write("\n");
	response.write('网站url:'+params.url+'\n');
	response.end('This is ok!')
}).listen(3000);