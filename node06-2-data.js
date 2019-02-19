var http=require('http');
var querystring=require('querystring');
http.createServer(function(req,res){
  var json={};
  if(req.url.indexOf('?')!=-1){
    var arr1=req.url.split('?');
    json=querystring.parse(arr1[1]);
    console.log(arr1[0],json);
  }
  res.write('aaa');
  res.end();
}).listen(8080);