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
function sum(x, y) {
    return x + y;
}
// 输入多余的（或者少于要求的）参数，是不被允许的
// sum(1, 2, 3);
var mySum = function (x, y) {
    return x + y;
};
// 这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 mySum 添加类型，则应该是这样
var mySum2 = function (x, y) {
    return x + y;
};
mySum2(1, 2);
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数
// 与接口中的可选属性类似，我们用 ? 表示可选的参数
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom = buildName('Tom');
// 参数默认值
// TypeScript 会将添加了默认值的参数识别为可选参数
// 剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(array);
    });
}
;
var a = [];
push(a, 1, 2, 3, 4);
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
