const calculateAge = () => {
    const ageInput = document.getElementById("Input");
    const resultParagraph = document.getElementById("result");
    const age = parseInt(ageInput.value);

    if (isNaN(age)) {
        resultParagraph.textContent = "Введите корректный возраст!";
    } else {
        let yearsText;

        if (age % 10 === 1 && age % 100 !== 11) {
            yearsText = "год";
        } else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) {
            yearsText = "года";
        } else {
            yearsText = "лет";
        }

        resultParagraph.textContent = 'Вам: ${age} ${yearsText}.';
    }
}