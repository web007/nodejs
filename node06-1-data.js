const querystring=require('querystring');
let str="name=abc&sex=man&age=30";
let json=querystring.parse(str);
console.log(json);