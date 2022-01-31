"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CalculateSumOfNumberSpiralDiagonals(startingNumber, sizeOfDiagonals) {
    let boxLength = Math.round(sizeOfDiagonals / 2);
    let sum = startingNumber;
    let lastNumber = startingNumber;
    for (let i = 1; i < boxLength; i++) {
        for (let j = 1; j <= 4; j++) {
            sum += lastNumber + ((i) * (2 * j));
            if (j === 4) {
                lastNumber = lastNumber + ((i) * (2 * j));
            }
        }
    }
    return sum;
}
exports.CalculateSumOfNumberSpiralDiagonals = CalculateSumOfNumberSpiralDiagonals;
let sum = CalculateSumOfNumberSpiralDiagonals(1, 1001);
console.log(sum);
//# sourceMappingURL=index.js.map