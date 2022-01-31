import { PrimeService } from "../../shared/lib/service/PrimeService";

const TRUNCATABLE_LIMIT = 11;

console.log('test')


const truncatablePrimes = new Array<number>();
const service = new PrimeService();

let i = 2;
service.isPrime(i);
i++;
while (truncatablePrimes.length !== TRUNCATABLE_LIMIT) {

    if (service.isPrime(i) && service.isTruncatablePrime(i)) {
        console.log(i);
        truncatablePrimes.push(i);

        if (truncatablePrimes.length === TRUNCATABLE_LIMIT) {
            break;
        }

    }
    i += 2;
}

console.log(truncatablePrimes.reduce((x, y) => x + y));