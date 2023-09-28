function countNumbers() {
    var numbersInput = document.getElementById("numbers");
    var resultElement = document.getElementById("result");

    var numbers = numbersInput.value.split(",");
    var maxNumber = Math.max(...numbers);
    var count = numbers.filter(number => number == maxNumber).length;

    resultElement.innerText = "Количество чисел, равных максимальному: " + count;
}