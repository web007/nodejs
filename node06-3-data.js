const urllib=require('url');
let url='http://www.baidu.com/index?a=1&b=2&name=abc&sex=man';
//这里不带true参数不会把query解析成json
let json=urllib.parse(url);
//let json=urllib.parse(url,true);
console.log(json);