var http=require('http');
var urllib=require('url');
http.createServer(function(req,res){
  var url=req.url;
  var get=urllib.parse(url,true);
  var pathname=urllib.parse(url,true).pathname;
  console.log(get,pathname);
  res.write('aaa');
  res.end();
}).listen(8080);