function calculateMedian() {
    const numbersInput = document.getElementById("numbers");
    const resultElement = document.getElementById("result");

    const numbers = numbersInput.value.split(",");
    numbers = numbers.map(Number);
    numbers.sort(function(a, b) {
        return a - b;
    });

    let median;
    if (numbers.length % 2 === 0) {
        median = (numbers[numbers.length/2 - 1] + numbers[numbers.length/2]) / 2;
    } else {
        median = numbers[Math.floor(numbers.length/2)];
    }

    resultElement.innerText = "Медиана набора чисел: " + median;
}
