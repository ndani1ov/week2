const calculateMedian = () => {
    let numbersInput = document.getElementById("numbers");
    let resultElement = document.getElementById("result");

    let numbers = numbersInput.value.split(",");
    numbers = numbers.map(Number);
    numbers.sort((a, b) => a - b);

    let median;
    if (numbers.length % 2 === 0) {
        median = (numbers[numbers.length/2 - 1] + numbers[numbers.length/2]) / 2;
    } else {
        median = numbers[Math.floor(numbers.length/2)];
    }

    resultElement.innerText = "Медиана набора чисел: " + median;
};