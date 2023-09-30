function calculate() {
    var input = document.getElementById("numbers").value;

    var numbers = input.split(",").map(function(item) {
      return parseInt(item.trim(), 10);
    });

    var maxNumber = Math.max.apply(null, numbers);
  
    var count = numbers.filter(function(item) {
      return item === maxNumber;
    }).length;

    document.getElementById("result").innerHTML = "Количество чисел, равных максимальному: " + count;
  }