var express = require('express'),
	app = express();

app.use(express.static('public'));

/* 主页输出hello world */
app.get('/', function(req, res) {
	console.log('主页 GET 请求');
	res.send('Hello GET');
});

app.post('/', function(req, res) {
	console.log('主页 POST 请求');
	res.send('Hello POST');
});

app.get('/del-user', function(req, res) {
	console.log('/del-user 响应 DELETE 请求');
	res.send('删除页面');
});

app.get('/list-user', function(req, res) {
	console.log('/list-user GET 请求');
	res.send('用户列表页面');
});

/* 正则表达式 */
app.get('/ab*cd', function(req, res) {
	console.log('/ab*cd GET 请求');
	res.send('正则匹配');
});

var server = app.listen(8081, function() {
	var host = server.address().address,
		port = server.address().port;

	console.log('应用地址，访问地址为 http://%s:%s', host, port);
});
