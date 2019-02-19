const http=require('http');
http.createServer(function(req,res){
  //准备一个接受数据的容器
  var str='';//暂时用一下，不是标准写法
  //data-有一段数据到达就触发data(执行多次)
  var i=0;
  req.on('data',function(data){
    //验证数据分段发送
    console.log(`第${i++}次收到数据`);
    str+=data;
  });
  //end-数据全部到达触发end(只执行一次)
  req.on('end',function(){
    console.log(str);
  });
}).listen(8080);