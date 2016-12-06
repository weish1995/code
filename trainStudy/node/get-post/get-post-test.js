var http = require('http'),
	url = require('url'),
	util = require('util'),
	querystring = require('querystring');

/* get请求 */
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type' : 'test/plain'});
	res.end(util.inspect(url.parse(req.url, true)));
}).listen(1212);

/* post请求 */
http.createServer(function(erq, res) {
	var post = '';	//定义一个post变量，用于暂存请求体的信息

	req.on('data', function(chunk) {
		post += chunk;
	});

	req.on('end', function() {
		post = querystring.parse(post);
		res.end(util.inspect(post));
	});

}).listen(2323);
