// 元组
// 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
// 元组起源于函数编程语言（如 F#）,在这些语言中频繁使用元组。

// let xcatliu: [string, number] = ['Xcat Liu', 25];

// let xcatliu: [string, number];
// xcatliu[0] = 'Xcat Liu';
// xcatliu[1] = 25;

// xcatliu[0].slice(1);
// xcatliu[1].toFixed(2);

// 越界的元素
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
let xcatliu: [string, number];
xcatliu = ['Xcat Liu', 25];
xcatliu.push('http://xcatliu.com/');
xcatliu.push(true);