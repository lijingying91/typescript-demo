// 数组的类型

// let fibonacci: number[] = [1, 1, 2, 3, 5];

// let fibonacci: number[] = [1, '2', 2, 3, 5];

// let fibonacci: number[] = [1, 2, 3, 5];
// fibonacci.push(8);

// 数组泛型
// 也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组
// let fibonacci: Array<number> = [1, 1, 2, 3, 5];

// 用接口表示数组

interface NumberArray {
	[index: number]: number
}

let fibonacci: NumberArray = [1, 1, 2, 3, 5];

// any 在数组中的应用
let list: any[] = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];

// 类数组
// 类数组（Array-like Object）不是数组类型，比如 arguments
function sum () {
	// let args: number[] = arguments;
	let args: IArguments = arguments;
}
// 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等