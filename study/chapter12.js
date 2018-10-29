function handleEvent(ele, event) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll'); // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'
// 类型别名与字符串字面量类型都是使用 type 进行定义
