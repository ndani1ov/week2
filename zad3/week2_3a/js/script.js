function calculate() {
    const input = document.getElementById("numbers").value;

    const numbers = input.split(",").map(function(item) {
      return parseInt(item.trim(), 10);
    });

    const maxNumber = Math.max.apply(null, numbers);
  
    const count = numbers.filter(function(item) {
      return item === maxNumber;
    }).length;

    document.getElementById("result").innerHTML = "Количество чисел, равных максимальному: " + count;
  }