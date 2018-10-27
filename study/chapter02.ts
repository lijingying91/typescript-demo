 // 任意值
 let myFavoriteNumber: any = 'seven';
 myFavoriteNumber = 7;

 // 任意值的属性和方法
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.firstname);

// 未声明类型的变量
let something; //变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
something = 'seven';
something = 7;
something.setName('Tom');