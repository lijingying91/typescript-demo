"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
// console.log(sayHello("TypeScript"));
var name = 'lijy';
var age = 27;
greet_1.sayHi(templateObject_1 || (templateObject_1 = __makeTemplateObject(["hello, my name is ", ", I'm ", " years old."], ["hello, my name is ", ", I'm ", " years old."])), name, age);
var templateObject_1;
