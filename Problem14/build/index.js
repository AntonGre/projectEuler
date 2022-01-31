"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Collatz(numberN) {
    if (numberN % 2 === 0) {
        return numberN / 2;
    }
    else {
        return numberN * 3 + 1;
    }
}
exports.Collatz = Collatz;
function NumberOfTerms(numberN, steps) {
    let newNumber = Collatz(numberN);
    steps++;
    if (newNumber !== 1) {
        steps = NumberOfTerms(newNumber, steps);
    }
    return steps;
}
exports.NumberOfTerms = NumberOfTerms;
let largestTerms = 0;
let value = 0;
for (let i = 1; i < 1000000; i++) {
    const newTerms = NumberOfTerms(i, 1);
    if (newTerms > largestTerms) {
        largestTerms = newTerms;
        value = i;
    }
}
console.log("value - " + value);
console.log("largestTerms - " + largestTerms);
//# sourceMappingURL=index.js.map