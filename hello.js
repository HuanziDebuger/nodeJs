const http =require("http");//第一步引入需要的模块
fn=function(req,res){
	res.write("hello,huanzi\n");
	res.end('This is ok!');
}
http.createServer(fn).listen(8888);

console.log('this is over');