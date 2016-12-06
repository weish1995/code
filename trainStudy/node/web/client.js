var http = require('http');

var options = {
	host : 'localhost',
	post : '8081',
	path : '/index.html'
};

//处理响应的回调函数
var callback = function(respose) {
	//不断更新数据
	var body = '';

	respose.on('data', function(data) {
		body += data;
	});

	respose.on('end', function() {
		//数据接受完成
		console.log(body);
	});
}

//向服务端发送请求
var req = http.request(options, callback);
req.end();
