const http=require('http');
var server=http.createServer(function(req,res){
  switch(req.url){
    case '/a.html':
      res.write('aaaaaaaaaaa');
      break;
    case '/b.html':
      res.write('bbbbbbbbbbb');
      break;
    default:
      res.write('404');
      break;
  }
  
  res.end();
});
server.listen(8080);