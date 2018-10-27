// 联合类型
// 联合类型（Union Types）表示取值可以为多种类型中的一种
let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// myFavoriteNumber = true;

// 访问联合类型的属性或方法
// 只能访问此联合类型的所有类型里共有的属性或方法
function getLength (something: string | number): string {
	// return something.length;
	return something.toString();
}

// 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let myFavoriteNumber2: string | number;
myFavoriteNumber2 = 'seven';
console.log(myFavoriteNumber2.length);
myFavoriteNumber2 = 7;
console.log(myFavoriteNumber2.length);