var fs = require('fs'),
	data = '';

/* 创建写入流 */
var writerStream = fs.createWriteStream('test.txt');

/* 设置编码格式和数据 */
writerStream.write('写入测试文本.', 'utf8');

/* 标记文件末尾 */
writerStream.end();

// 处理流事件 --> finish error
writerStream.on('finish', function() {
	console.log('写入完成');
	
	/* 创建可读流 */
	var readerStream = fs.createReadStream('test.txt');

	/* 设置编码格式 */
	readerStream.setEncoding('utf8');

	//处理流事件 --> data end error
	readerStream.on('data', function(chunk){
		data += chunk;
	});

	readerStream.on('end', function() {
		console.log(data);
	});

	readerStream.on('error', function(err) {
		console.log(err.stack);
	});
});

writerStream.on('error', function(err) {
	console.log(err.stack);
});
