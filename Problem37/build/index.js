"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimeService = void 0;
class PrimeService {
    constructor() {
        this.primeMap = new Map();
    }
    isTruncatablePrime(number) {
        if (number < 10) {
            return false;
        }
        let prime = number.toString();
        // check left side
        for (let i = 1; i < prime.length; i++) {
            const primeToNumber = Number.parseInt(prime.substr(i));
            if (!this.primeMap.get(primeToNumber)) {
                return false;
            }
        }
        // check right side
        for (let i = 1; i < prime.length; i++) {
            const primeToNumber = Number.parseInt(prime.substr(0, prime.length - i));
            if (!this.primeMap.get(primeToNumber)) {
                return false;
            }
        }
        return true;
    }
    isPrime(number) {
        for (let i = 2; i <= (number / 2); i++) {
            if (number % i === 0) {
                this.primeMap.set(number, false);
                return false;
            }
        }
        this.primeMap.set(number, true);
        return true;
    }
}
exports.PrimeService = PrimeService;
const TRUNCATABLE_LIMIT = 11;
console.log('test');
const truncatablePrimes = new Array();
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
//# sourceMappingURL=index.js.map