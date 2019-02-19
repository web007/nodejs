var http=require('http');
http.createServer(function(req,res){
  var json={};
  if(req.url.indexOf('?')!=-1){
    var arr1=req.url.split('?');
    var arr2=arr1[1].split('&');
    for(var i=0; i<arr2.length; i++){
      var arr3=arr2[i].split("=");
      json[arr3[0]]=arr3[1];
    } 
    console.log(arr1[0],json);
  }
  res.write('aaa');
  res.end();
}).listen(8080);