//引入filesystem模块
const fs=require('fs');
//读取文件方法readFile,接受两个参数,读取文件的路径，回到函数
//该回调函数接受两个参数，读取失败的错误信息，读取成功的数据
fs.readFile('node1.js',function(err,data){
  console.log(err);
  console.log(data.toString());//将读取的buffer二进制数据转换
})
//写入文件方法writeFile，接受3个参数，写入的路径，写入的数据，回调函数
//该回调函数接受一个参数，写入失败的错误信息
fs.writeFile('./wirte.txt','abcd',function(err){
  console.log(err);
})