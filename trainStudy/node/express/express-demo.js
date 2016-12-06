var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('hello world');
});

var server = app.listen(2323, function() {
	var host = server.address().address,
		port = server.address().port;

	console.log(server.address());
	console.log('应用地址，访问地址为 http://%s:%s', host, port);
});
