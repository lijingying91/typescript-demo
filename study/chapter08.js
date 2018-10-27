// 类型断言
// 类型断言（Type Assertion）可以用来手动指定一个值的类型。
// 语法
// <类型>值
// 或
// 值 as 类型
// 在 tsx 语法（React 的 jsx 语法的 ts 版）中必须用后一种
// function getLength(something: string | number): number {
//     if (something.length) {
//         return something.length;
//     } else {
//         return something.toString().length;
//     }
// }
// 此时可以使用类型断言，将 something 断言成 string
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
// 类型断言的用法如上，在需要断言的变量前加上 <Type> 即可。
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
