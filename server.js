const http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello There, how is it going');
  console.log('Your server is running on port 3000');
}).listen(3000);
