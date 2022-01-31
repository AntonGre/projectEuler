export function Collatz(numberN: number): number {
    if (numberN % 2 === 0) {
        return numberN / 2;
    } else {
        return numberN * 3 + 1;
    }
}

export function NumberOfTerms(numberN: number, steps: number): number {
    let newNumber = Collatz(numberN);
    steps++
    if (newNumber !== 1) {
        steps = NumberOfTerms(newNumber, steps);
    }
    return steps;
}

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