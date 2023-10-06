function checkPrime() {
    const number = parseInt(document.getElementById("number").value);
    const primes = [];

    for (var i = 2; i <= number; i++) {
        primes[i] = true;
    }

    for (let i = 2; i * i <= number; i++) {
        if (primes[i]) {
            for (let j = i * i; j <= number; j += i) {
                primes[j] = false;
            }
        }
    }

    let result = document.getElementById("result");
    result.innerHTML = "Простые числа до " + number + ": ";

    for (let i = 2; i <= number; i++) {
        if (primes[i]) {
            result.innerHTML += i + " ";
        }
    }
}