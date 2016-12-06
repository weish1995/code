var buf = new Buffer(256);

/* 写入缓冲区 */
len = buf.write('buffer test', 'utf-8');

/* 转化为JSON对象 */
var json = buf.toJSON();

/* 合并缓冲区 */
var buf1 = new Buffer('wei');
var buf2 = new Buffer('shuangjian');

var buf3 = Buffer.concat([buf1, buf2]);

/* 拷贝缓冲区 */
var bufCopy = new Buffer(buf1.length);
buf1.copy(bufCopy);

/* 从缓冲区读取 比较缓冲区 */
console.log(len, buf.toString('utf-8', 0, len), new Buffer('weish').toJSON(), buf3.toString(), buf2.compare(buf1), bufCopy.toString());
