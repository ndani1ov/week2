const initializePrimes = (number) => {
    const primes = [];

    for (let i = 2; i <= number; i++) {
        primes[i] = true;
    }

    return primes;
}

const updatePrimes = (primes, number) => {
    for (let i = 2; i * i <= number; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= number; j += i) {
                primes[j] = false;
            }
        }
    }

    return primes;
}

const displayPrimes = (primes, number) => {
    const result = document.getElementById("result");
    result.innerHTML = "Простые числа до " + number + ": ";

    for (let i = 2; i <= number; i++) {
        if (primes[i]) {
            result.innerHTML += i + " ";
        }
    }
}

const checkPrime = () => {
    const number = parseInt(document.getElementById("number").value);
    const primes = initializePrimes(number);
    const updatedPrimes = updatePrimes(primes, number);
    displayPrimes(updatedPrimes, number);
}