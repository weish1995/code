var events = require('events'),
	emitter = new events.EventEmitter();

/* 注册监听器 */
emitter.on('someEvent', function() {
	console.log('events -- EventEmitter.');
});

/* 多个监听器的时候 依次触发 */
emitter.on('someEvent', function() {
	console.log('events -- EventEmitter  multiple.');
});

/* 触发监听器 */
emitter.emit('someEvent');
