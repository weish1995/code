var fs = require('fs');

/* 异步读取 */
fs.readFile('input.txt', function(err, data) {
	if (err) {
		return console.log(err);
	}

	console.log('异步读取：' + data.toString());
});

//同步读取
var data = fs.readFileSync('input.txt');
console.log('同步读取：' + data.toString());

/* 异步打开文件 */
fs.open('input.txt', 'r+', function(err, fd) {
	if (err) {
		return console.log(err);
	}

	console.log('文件打开成功!');
});

/* 获取文件信息 */
fs.stat('../event.js', function(err, stats) {
	console.log(stats.isFile());
});

fs.stat('input.txt', function(err, stats) {
	if (err) {
		return console.log(err);
	}

	console.log(stats);
	console.log('读取文件信息成功！');

	/* 检测文件类型 */
	console.log('是否为文件(isFile)？' + stats.isFile());
	console.log('是否为目录(isDirectory)？' + stats.isDirectory());
});

/* 异步写入文件 */
fs.writeFile('write.txt', '通过写入的文件内容', function(err) {
	if (err) {
		return console.error(err);
	}

	console.log('写入成功！');

	fs.readFile('write.txt', function(err, data) {
		if (err) {
			return console.error(err);
		}

		console.log('写入的内容：' + data.toString());
	});
});

fs.unlink('t.txt', function(err) {
	if(err) {
		return console.error(err);
	}

	console.log('删除文件成功');
});

fs.mkdir('./test/', function(err) {
	if (err) {
		return console.error(err);
	}

	console.log('创建文件夹成功');
});

fs.rmdir('./test/', function(err) {
	if (err) {
		return console.error(err);
	}

	console.log('删除成功');
});

/* 读取文件夹 */
fs.readdir('../', function(err, files) {
	if (err) {
		return console.error(err);
	}

	files.forEach(function(file) {
		console.log(file);
	});
});
