var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

app.use(express.static('public'));

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/process_get', function(req, res) {
	//输出json格式
	var response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};

	console.log(response);
	res.end(JSON.stringify(response));
});

/* 创建application/x-www-form-urlencoded 编码解析 */
var urlEncodedParser = bodyParser.urlencoded({extened: false});

app.post('/process_get', urlEncodedParser, function(req, res) {
	var response = {
		first_name: req.body.first_name,
		last_name: req.body.last_name
	};

	console.log(response);
	res.end('POST:' + JSON.stringify(response));
});

var server = app.listen(8081, function() {
	console.log('开始监听');
});
