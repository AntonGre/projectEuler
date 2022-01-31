


export function CalculateSumOfNumberSpiralDiagonals(startingNumber: number, sizeOfDiagonals: number) {
    let boxLength = Math.round(sizeOfDiagonals/2)
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

let sum = CalculateSumOfNumberSpiralDiagonals(1, 1001);


console.log(sum);