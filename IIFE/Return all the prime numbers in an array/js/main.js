const primes = (function(arr) {
    const isPrime = num => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    return arr.filter(isPrime);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(primes);
