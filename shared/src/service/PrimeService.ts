

export class PrimeService {

    private primeMap = new Map<number, boolean>();

    public isCircularPrime(number: number): boolean {
        if (number < 10) {
            return this.isPrime(number);
        }
        const rotateNumber = (number.toString().substr(1) + number.toString()[0]);
        return this.isCircularPrimeRes(rotateNumber, number.toString());
    }

    private isCircularPrimeRes(numberToCheck: string, originalNumber: string): boolean {
        if (numberToCheck === originalNumber) {
            return this.isPrime(Number.parseInt(originalNumber));
        }
        const rotateNumber = numberToCheck.toString().substr(1) + numberToCheck.toString()[0];

        return this.isPrime(parseInt(numberToCheck)) && this.isCircularPrimeRes(rotateNumber, originalNumber);
    }

    public isTruncatablePrime(number: number): boolean {

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

    public isPrime(number: number): boolean {
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