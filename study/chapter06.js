// 数组的类型
var fibonacci = [1, 1, 2, 3, 5];
// any 在数组中的应用
var list = ['Xcat Liu', 25, { website: 'http://xcatliu.com' }];
// 类数组
// 类数组（Array-like Object）不是数组类型，比如 arguments
function sum() {
    // let args: number[] = arguments;
    var args = arguments;
}
// 事实上常见的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等
