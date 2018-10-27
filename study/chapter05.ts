// 对象的类型——接口
// 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implements）
// TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述
// interface Person {
// 	name: string;
// 	age: number;
// }

// // 接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。
// let tom: Person = {
// 	name: 'Tom',
// 	age: 25,
// 	// gender: 'male'
// }

// 可选属性
// 有时我们希望不要完全匹配一个形状，那么可以用可选属性
// interface Person {
// 	name: string;
// 	age?: number;
// }

// let tom: Person = {
// 	name: 'Tom'
// }
// 可选属性的含义是该属性可以不存在
// 这时仍然不允许添加未定义的属性
interface Person {
	readonly id: number;
	name: string;
	age?: number;
	[propName: string]: any;
}

let tom: Person = {
	// id: 89757,
	name: 'Tom',
	gender: 'male'
}

tom.id = 9527;

// 使用 [propName: string] 定义了任意属性取 string 类型的值
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性


// 只读属性
// 有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性


// DBW GPN
