function checkPrime() {
    var number = parseInt(document.getElementById("number").value);
    var primes = [];

    for (var i = 2; i <= number; i++) {
        primes[i] = true;
    }

    for (var i = 2; i * i <= number; i++) {
        if (primes[i]) {
            for (var j = i * i; j <= number; j += i) {
                primes[j] = false;
            }
        }
    }

    var result = document.getElementById("result");
    result.innerHTML = "Простые числа до " + number + ": ";

    for (var i = 2; i <= number; i++) {
        if (primes[i]) {
            result.innerHTML += i + " ";
        }
    }
}