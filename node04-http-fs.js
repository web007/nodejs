const http=require('http');
const fs=require('fs');
const server=http.createServer(function(request,response){
  //  将客户端请求的地址存放到变量fileName中
  //  './www',指的是请求的文件夹
  //  我们可以在服务器上指定一个文件夹存放客户端请求的文件
  var fileName='./www'+request.url;
  fs.readFile(fileName,function(err,data){
    if(err){
      response.write('404');
    }else{
      response.write(data)
    }
    response.end();
  });
});
server.listen(8080);