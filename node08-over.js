const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');
var server=http.createServer(function(req,res){
  //get
  var obj=urlLib.parse(req.url,true);
  var url=obj.pathname;
  const GET=obj.query;
  //post
  var str='';
  req.on('data',function(data){
    str+=data;
  });
  req.on('end',function(){
    const POST=querystring.parse(str);
    console.log(url,GET,POST);
  });
  //文件请求
  var file_name='./www'+url;//这里就不用req.url,因为req.url后面可能有数据
  fs.readFile(file_name,function(err,data){
    if(err){
      res.write('404');
    }else{
      res.write(data);
    }
    res.end();
  })
})
server.listen(8080);