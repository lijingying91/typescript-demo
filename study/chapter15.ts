// class Animal {
//     name = 'Jack';

//     constructor() {
//         // ...
//     }
// }

// let a = new Animal();
// console.log(a.name); // Jack


// public private 和 protected
// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
class Animal {
    public name;
    public constructor(name) {
        this.name = name;
    }
}

let a = new Animal('Jack');
console.log(a.name); // Jack
a.name = 'Tom';
console.log(a.name); // Tom

// 抽象类是不允许被实例化的
// 抽象类中的抽象方法必须被子类实现

// 类的类型
// 给类加上 TypeScript 的类型很简单，与接口类似
class Animal2 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sayHi(): string {
      return `My name is ${this.name}`;
    }
}

let a2: Animal2 = new Animal2('Jack');
console.log(a2.sayHi()); // My name is Jack

