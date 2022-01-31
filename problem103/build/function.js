"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCombinations = exports.getCombinations = exports.CheckOptimum = void 0;
function CheckOptimum(elements) {
    const b = getCombinations(elements);
    const combinations = checkCombinations(elements, []);
    return combinations;
}
exports.CheckOptimum = CheckOptimum;
// export function createCombinations(elements: Array<number>) {
//     const copy = [...elements].sort((a, b) => a - b);
//     const combinations = new Array<[number[], number[]]>();
//     for (let i = 0; i < elements.length; i++) {
//         for (let j = 0; j < elements.length; j++) {
//             const comb1 = copy.slice(0, j + 1);
//             const comb2 = copy.slice(j + 1, copy.length);
//             console.dir(comb1, comb2);
//             combinations.push([comb1, comb2]);
//         }
//     }
//     return combinations;
// }
function getCombinations(elements) {
    const result = [];
    const f = function (prefix, chars) {
        for (var i = 0; i < chars.length; i++) {
            result.push(prefix.concat(chars[i]));
            f(prefix.concat(chars[i]), chars.slice(i + 1));
        }
    };
    f([], elements);
    return result;
}
exports.getCombinations = getCombinations;
function checkCombinations(elements, comb) {
    const t = elements.slice(0, elements.length / 2 + 1);
    const te = elements.slice(elements.length / 2 + 1);
    if (t.reduce((x, y) => x + y) <= te.reduce((x, y) => x + y)) {
        return false;
    }
    for (let i = 0; i < elements.length; i++) {
        const copy = [...elements];
        const comb1 = copy.splice(0, i + 1);
        for (let j = 0; j < elements.length; j++) {
            const comb2 = elements.slice(j + 1);
            const value1 = comb1.reduce((x, y) => x + y);
            const value2 = comb2.reduce((x, y) => x + y);
            if (value1 === value2) {
                return false;
            }
            comb.push([comb1, comb2]);
        }
    }
    return true;
}
exports.checkCombinations = checkCombinations;
//# sourceMappingURL=function.js.map