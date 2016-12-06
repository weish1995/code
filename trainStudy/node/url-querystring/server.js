var http = require('http'),
	url = require('url');

function start(route) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log('request for ' + pathname + ' received.');

		var restr = route(pathname);

		response.writeHead(200, {'Content-Type' : 'text/plain'});
		response.write(restr);
		response.end();
	}

	http.createServer(onRequest).listen(1231);
	console.log('Server has started');
}

module.exports
exports.start = start;
