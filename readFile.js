const fs=require('fs');
//同步读取文件
const data=fs.readFileSync('aaa.txt');
console.log(data.toString());
console.log("执行结束");

//异步非阻塞I/O读取文件
fs.readFile('aaa.txt',function(err,data){
	if(err){console.log(err)}
	console.log(data.toString());
});
console.log('异步执行结束');//程序先输出这块
