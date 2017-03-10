//同步读取文件
const fs=require('fs');
const data=fs.readFileSync('input.txt');
console.log(data);
console.log("执行结束");
