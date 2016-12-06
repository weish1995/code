var fs = require('fs'),
	zlib = require('zlib');

/* 创建读出流 */
var readerStream = fs.createReadStream('test.txt');

/* 创建写入流 */
var writerStream = fs.createWriteStream('out.txt');

/* pipe连接管道 */
readerStream.pipe(writerStream);

/* 压缩文件 */
fs.createReadStream('test.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('test.txt.zip'));

console.log('文件压缩完成');

fs.createReadStream('test.txt.zip')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('outzip.txt'));

console.log('文件解压完成');
