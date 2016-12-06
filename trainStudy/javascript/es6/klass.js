/* class里面的方法都是不可枚举的 与es5不一致
   类的构造函数必须使用new创建 不能像普通函数调用
   不存在变量声明提升 */
class Point {
	/* 类的必须方法 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	toString() {
		return '(' + this.x + ', ' + this.y + ')';
	}

	/* 私有方法 */
	_xAdd() {
		return this.x + 1;
	}
}

/* object.assign -- add function */
Object.assign(Point.prototype, {
	sum() {
		return this.x + this.y;
	},
	getX() {
		return this.x;
	}
});

/* 类的继承 */
class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);
		this.color = color;
	}

	toString() {
		return this.color + ' ' + super.toString();
	}
}

var point = new Point(1, 2),
	p2 = new Point(2, 3);

point.hasOwnProperty('x'); // true 定义在this变量上的都是实例对象自身的属性 
point.hasOwnProperty('x'); // true
point.hasOwnProperty('toString'); // false
point.__proto__ === p2.__proto__; //true 可以通过__proto__为原型添加方法

point.__proto__.getY = function() {
	return this.y;
};

console.log(typeof Point, Point === Point.prototype.constructor);
console.log(point.toString(), point.sum(), point.getX(), point.__proto__ === p2.__proto__);

var colorPoint = new ColorPoint(5, 10, 'red');

console.log(colorPoint.toString());