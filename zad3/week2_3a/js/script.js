const calculate = () => {
  let input = document.getElementById("numbers").value;

  let numbers = input.split(",").map((item) => {
    return parseInt(item.trim(), 10);
  });

  let maxNumber = Math.max.apply(null, numbers);

  let count = numbers.filter((item) => {
    return item === maxNumber;
  }).length;

  document.getElementById("result").innerHTML = "Количество чисел, равных максимальному: " + count;
};