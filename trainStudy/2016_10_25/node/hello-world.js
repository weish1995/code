var http = require('http');

http.createServer(function(request, reponse) {
	reponse.writeHead(200, {'Content-Type' : 'text/plain'});

	reponse.end('hello world');
}).listen(1234);

console.log('Server running at http://127.0.0.1:1234/');