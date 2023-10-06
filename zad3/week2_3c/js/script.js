function sortNumbers() {
    const numbersInput = document.getElementById("numbers");
    const resultElement = document.getElementById("result");
    const numbers = numbersInput.value.split(",");
    numbers = numbers.map(Number);
    const sortedNumbers = mergeSort(numbers);
    resultElement.innerText = "Отсортированный набор чисел: " + sortedNumbers.join(", ");
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}