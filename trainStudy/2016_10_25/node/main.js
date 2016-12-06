var fs = require('fs');

/* 阻塞模式 */
// var data = fs.readFileSync('input.txt');

// console.log(data.toString());

/* 非阻塞 */
fs.readFile('input.txt', function(err, data) {
	if (err) {
		return console.error(err);
	}

	console.log(data.toString());
});