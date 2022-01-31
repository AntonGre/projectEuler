"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimeService = void 0;
class PrimeService {
    constructor() {
        this.primeMap = new Map();
    }
    isCircularPrime(number) {
        if (number < 10) {
            return this.isPrime(number);
        }
        const rotateNumber = (number.toString().substr(1) + number.toString()[0]);
        return this.isCircularPrimeRes(rotateNumber, number.toString());
    }
    isCircularPrimeRes(numberToCheck, originalNumber) {
        if (numberToCheck === originalNumber) {
            return this.isPrime(Number.parseInt(originalNumber));
        }
        const rotateNumber = numberToCheck.toString().substr(1) + numberToCheck.toString()[0];
        return this.isPrime(parseInt(numberToCheck)) && this.isCircularPrimeRes(rotateNumber, originalNumber);
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
        if (this.primeMap.get(number)) {
            return true;
        }
        for (let i = 2; i <= (number / 2); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        this.primeMap.set(number, true);
        return true;
    }
}
exports.PrimeService = PrimeService;
//# sourceMappingURL=PrimeService.js.map