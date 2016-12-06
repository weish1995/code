var http = require('http'),
	fs = require('fs'),
	url = require('url');

http.createServer(function(req, res) {
	//解析请求，包括文件名
	var pathname = url.parse(req.url).pathname;

	//输出请求的文件名
	console.log(' Request for ' + pathname + ' received');

	//从文件系统读取请求的文件内容
	fs.readFile(pathname.substr(1), function(err, data) {
		if (err) {
			console.error(err);
		} else {
			res.writeHead(200, {'Content-Type' : 'text/html'});

			//响应文件内容
			res.write(data.toString());
		}

		res.end();
	});
}).listen(3636);
