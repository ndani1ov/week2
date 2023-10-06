function calculateSquareRoot() {
  let numberInput = document.getElementById("number");
  let number = parseFloat(numberInput.value);

  if (isNaN(number)) {
      document.getElementById("result").innerText = "Введите число";
      return;
  }

  let guess = number / 2;

  while (Math.abs(guess * guess - number) > 0.001) {
      guess = (guess + number / guess) / 2;
  }

  document.getElementById("result").innerText = "Квадратный корень: " + guess.toFixed(3);
}