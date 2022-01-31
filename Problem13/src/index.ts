import {numberArray } from "./listArray";

let appendValue = 0;

for(let number of numberArray){
    appendValue += number;
}

console.log("Result is")
console.log(appendValue);
console.log(appendValue.toPrecision(10).toString());



