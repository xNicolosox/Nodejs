var http = require ('http');

http.createServer(function(req, res){
  res.end("hello client, welcome to website");
}).listen(8001);

console.log("O servidor esta disponivel!");
