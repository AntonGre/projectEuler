"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listArray_1 = require("./listArray");
let appendValue = 0;
for (let number of listArray_1.numberArray) {
    appendValue += number;
}
console.log("Result is");
console.log(appendValue);
console.log(appendValue.toPrecision(10).toString());
//# sourceMappingURL=index.js.map