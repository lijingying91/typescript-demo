// 声明文件
// 当使用第三方库时，我们需要引用它的声明文件。

// 声明语句
// 假如我们想使用第三方库，比如 jQuery，我们通常这样获取一个 id 是 foo 的元素
declare var jQuery: (selector: string) => any;

jQuery('#foo');

// 声明文件
// 通常我们会把类型声明放到一个单独的文件中，这就是声明文件
// // jQuery.d.ts

declare var jQuery: (string) => any;
// 然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：

/// <reference path="./jQuery.d.ts" />

jQuery('#foo');

// 第三方声明文件
// 当然，jQuery 的声明文件不需要我们定义了，已经有人帮我们定义好了：jQuery in DefinitelyTyped。
// 我们可以直接下载下来使用，但是更推荐的是使用工具统一管理第三方库的声明文件。
// 社区已经有多种方式引入声明文件，不过 TypeScript 2.0 推荐使用 @types 来管理。
// @types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
// npm install @types/jquery --save-dev