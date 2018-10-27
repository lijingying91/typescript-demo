// 函数的类型
// 在 JavaScript 中，有两种常见的定义函数的方式——函数声明（Function Declaration）和函数表达式
// // 函数声明（Function Declaration）
// function sum(x, y) {
//     return x + y;
// }

// // 函数表达式（Function Expression）
// let mySum = function (x, y) {
//     return x + y;
// };

function sum (x: number, y: number): number {
	return x + y;
}

// 输入多余的（或者少于要求的）参数，是不被允许的
// sum(1, 2, 3);

let mySum = function (x: number, y: number): number {
	return x + y;
}
// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样

let mySum2: (x: number, y: number) => number = function(x: number, y: number): number {
	return x + y;
}
mySum2(1, 2);

// 用接口定义函数的形状
interface SearchFunc {
	(source: string, subString: string): boolean; 
}
let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
	return source.search(subString) !== -1;
}

// 可选参数
// 与接口中的可选属性类似，我们用 ? 表示可选的参数
function buildName(firstName: string, lastName: string = 'Cat') {
	if (lastName) {
		return firstName + ' ' + lastName;
	} else {
		return firstName;
	}
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

// 参数默认值
// TypeScript 会将添加了默认值的参数识别为可选参数


// 剩余参数
function push (array: any[], ...items: any[]) {
	items.forEach(function(item){
		array.push(array);
	})
};
let a = [];
push(a, 1, 2, 3, 4);

// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理。
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}








