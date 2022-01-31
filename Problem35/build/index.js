"use strict";
// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
// How many circular primes are there below one million?
Object.defineProperty(exports, "__esModule", { value: true });
const PrimeService_1 = require("./services/PrimeService");
// https://projecteuler.net/problem=35
const LIMIT = 1000000;
const service = new PrimeService_1.PrimeService();
let i = 2;
service.isCircularPrime(2);
i++;
let countOfCirculars = 1;
while (i < LIMIT) {
    if (service.isCircularPrime(i)) {
        console.log(i);
        countOfCirculars++;
    }
    i += 2;
}
console.log("Number of circular primes, under 1 million is: " + countOfCirculars);
//# sourceMappingURL=index.js.map