/*

The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?


*/
import { PrimeService } from "../../shared/lib/service/PrimeService";

const LIMIT = 1000000;

let service = new PrimeService();
let primeCollection = [2];

let obj: { prime: number, primes: number[] } = { prime: 0, primes: [] };

for (let i = 3; i < LIMIT; i = i + 2) {


    if (service.isPrime(i)) {

        const col = [...primeCollection];
        const count = consecutivePrime(i, col);
        if (count && count.length > obj.primes.length) {
            obj.prime = i;
            obj.primes = count;
        }

        primeCollection.push(i);
    }
}

console.log(obj);
console.log(obj.primes.length);
console.log(obj.primes.reduce((x, y) => x + y))

function consecutivePrime(targetPrime: number, primes: number[]): number[] | undefined {

    for (let i = 0; primes.length > i; i++) {

        let sum = 0;
        for (let j = i; primes.length > j; j++) {
            sum += primes[j];
            if (targetPrime === sum) {
                return primes.slice(i, j + 1);
            } else if (sum > targetPrime) {
                break;
            }
        }
    }
}

/*

function sumUpRes(prime: number, primes: number[], partial: number[]): number[] | undefined {


    let sum = 0;
    for (let i = 0; i < partial.length; i++) {
        sum += partial[i];
    }

    if (prime === sum) {
        return partial;
    } else if (prime < sum) {
        return;
    }

    let result: number[] | undefined = undefined;

    for (let i = 0; i < primes.length; i++) {

        let remaning = primes.slice(i + 1);
        let p = primes[i];
        let partial_rec = [...partial];
        partial_rec.push(p);

        result = sumUpRes(prime, remaning, partial_rec);
        if (result) {
            break;
        }
    }
    return result;
}
*/

