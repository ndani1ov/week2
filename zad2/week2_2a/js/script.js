function calculateSquareRoot() {
  let numberInput = document.getElementById("number");
  let number = parseFloat(numberInput.value);

  if (isNaN(number)) {
      document.getElementById("result").innerText = "Введите число";
      return;
  }

  let guess = number / 2; // Начальное предположение

  while (Math.abs(guess * guess - number) > 0.001) {
      guess = (guess + number / guess) / 2; // Итерационная формула Герона
  }

  document.getElementById("result").innerText = "Квадратный корень: " + guess.toFixed(3);
}