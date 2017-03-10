//创建长度
const buf =new Buffer(10);
console.log(buf);
//创建数组
const buf02 =new Buffer([10,20,30,40]);
console.log(buf02);
//通过字符串创建buffer
const buf03 =new Buffer("www.gome.com.cn");
console.log(buf03);
//写入node缓存区的buffer
const buf04 =new Buffer(256);
const len =buf04.write('国美在线，国美在线',2,5,'utf-8');
console.log("写入的字节数："+len);
//Buffer转json
const buf05 =new Buffer("www.gome.com.cn");
console.log(buf05.toJSON());
