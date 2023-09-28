function calculateDays() {
    var monthNumber = parseInt(document.getElementById("monthInput").value);
    var days;

    if(monthNumber > 12)
        document.getElementById("result").innerHTML = "алярм алярм, в году 12 месяцев!!";
    else {
        if (monthNumber == 2) {
            var year = new Date().getFullYear();
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                days = 29;
            } else {
                days = 28;
            }
        } else if (monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11) {
            days = 30;
        } else {
            days = 31;
        }

        document.getElementById("result").innerHTML = "дней в месяце: " + days;
    }
}

    