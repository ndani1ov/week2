const getInputNumber = () => {
  const numberInput = document.getElementById("number");
  const number = parseFloat(numberInput.value);
  return number;
};

const validateNumber = (number) => {
  if (isNaN(number)) {
    document.getElementById("result").innerText = "Введите число";
    return false;
  }
  return true;
};

const calculateGuess = (number) => {
  let guess = number / 2;

  while (Math.abs(guess * guess - number) > 0.001) {
    guess = (guess + number / guess) / 2;
  }

  return guess;
};

const displayResult = (guess) => {
  document.getElementById("result").innerText = "Квадратный корень: " + guess.toFixed(3);
};

const calculateSquareRoot = () => {
  const number = getInputNumber();

  if (!validateNumber(number)) {
    return;
  }

  const guess = calculateGuess(number);

  displayResult(guess);
};