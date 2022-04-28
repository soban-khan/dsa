/**
 *   Improved O( n^(1/2)) ) Algorithm
 *    Checks if n is divisible by 2 or any odd number from 3 to sqrt(n).
 *    The only way to improve on this is to check if n is divisible by 
 *   all KNOWN PRIMES from 2 to sqrt(n).
 **/
function isPrime(n) {
    // check lower boundaries on primality
    if (n == 2) {
        return true;
    } // 1 is not prime, even numbers > 2 are not prime
    else if (n == 1 || (n & 1) == 0) {
        return false;
    }

    // Check for primality using odd numbers from 3 to sqrt(n)
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        // n is not prime if it is evenly divisible by some 'i' in this range
        if (n % i == 0) {
            return false;
        }
    }
    // n is prime
    return true;
}

console.log(isPrime(26))