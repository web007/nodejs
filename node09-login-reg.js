const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlLib=require('url');
//声明一个空的users对象用来存放用户名对应的密码
var users={};
var server=http.createServer(function(req,res){
  var obj=urlLib.parse(req.url,true);
  var url=obj.pathname;
  var GET=obj.query;
  var str='';
  req.on('data',function(data){
    str+=data;
  });
  req.on('end',function(){
    var POST=querystring.parse(str);
    if(url=='/user'){
      switch(GET.act){
        case 'reg':
          if(users[GET.user]){
            res.write('{"ok":false,"msg":"账号已存在"}');
          }else{
            users[GET.user]=GET.pass;
            res.write('{"ok":true,"msg":"注册成功"}');
          }
          break;
        case 'log':
          if(users[GET.user]==null){
            res.write('{"ok":false,"msg":"此账号不存在"}');
          }else if(users[GET.user]!=GET.pass){
            res.write('{"ok":false,"msg":"账号和密码有误"}');
          }else{
            res.write('{"ok":true,"msg":"登录成功"}');
          }
          break;
        default:
          res.write('{"ok":false,"msg":"未知的情况"}')
          break;
      }
      res.end();
    }else{
      var file_name='./www'+url;
      fs.readFile(file_name,function(err,data){
        if(err){
          res.write('404');
        }else{
          res.write(data);
        }
        res.end();
      });
    }
  })
});
server.listen(8080);