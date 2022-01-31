"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateSumOfDigits(startNumber) {
    let sum = 0;
    let ss = startNumber.toString();
    for (let i = 0; i < ss.length; i++) {
        sum += parseInt(ss[i]);
    }
    return sum;
}
exports.calculateSumOfDigits = calculateSumOfDigits;
function multipleString(value1, value2) {
    let newValue = "";
    for (let i = value1.length; i > 0; i--) {
        const prefix = "0".repeat(value1.length - i);
        let value = value2 * parseInt(value1[i]) + prefix;
        if (!newValue) {
            newValue = value;
        }
        else {
            newValue = addStrings(newValue, value);
        }
    }
    return newValue;
}
exports.multipleString = multipleString;
const powerOf50 = Math.pow(2, 50);
let startValue = powerOf50.toString();
for (let i = 0; i < 20; i++) {
    startValue = multipleString(startValue, powerOf50);
}
console.log(startValue);
let sum = calculateSumOfDigits(startValue);
console.log(sum);
function addStrings(str1, str2) {
    let str1a = str1.split('').reverse();
    let str2a = str2.split('').reverse();
    let output = '';
    let longer = Math.max(str1.length, str2.length);
    let carry = false;
    for (let i = 0; i < longer; i++) {
        let result = 0;
        if (str1a[i] && str2a[i]) {
            result = parseInt(str1a[i]) + parseInt(str2a[i]);
        }
        else if (str1a[i] && !str2a[i]) {
            result = parseInt(str1a[i]);
        }
        else if (!str1a[i] && str2a[i]) {
            result = parseInt(str2a[i]);
        }
        if (carry) {
            result += 1;
            carry = false;
        }
        if (result >= 10) {
            carry = true;
            output += result.toString()[1];
        }
        else {
            output += result.toString();
        }
    }
    output = output.split('').reverse().join('');
    if (carry) {
        output = '1' + output;
    }
    return output;
}
//# sourceMappingURL=index.js.map