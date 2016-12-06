var filename = __filename, /* 当前文件名 -- 绝对路径 */
	dirname = __dirname, /* 当前执行脚本所在目录 */
	util =  require('util'); /* 提供常用函数 */

console.log(filename, dirname);

console.info('程序开始执行：');

var counter = 10;
console.log('计数：%d', counter);

console.time();
console.timeEnd();

/* process */
process.stdout.write('Hello World!' + '\n');

/* 通过参数读取 */
process.argv.forEach(function(val, index, array) {
	console.log(index + ': ' + val);
});

/* 获取执行路径 */
console.log(process.execPath);

/* 平台信息 */
console.log(process.platform);

/* 输出当前目录 */
console.log('当前目录：' + process.cwd());

/* 输出当前版本 */
console.log('当前版本：' + process.version);

/* 输出内存使用情况 */
console.log(process.memoryUsage());

/* util */
function Person() {
	this.name = 'weish';
	this.toString = function() {
		return this.name;
	};
}

var obj = new Person();
/* util.inspect将对象转化为字符串 */
console.log(util.inspect(obj), util.inspect(obj, true));
console.log(util.isArray([]), util.isRegExp(/asd/), util.isDate(new Date()), util.isError(new Error()));
