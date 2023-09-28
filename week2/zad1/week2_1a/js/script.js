function formatAge() {
    var age = document.getElementById("age").value;
    var result = document.getElementById("result");
    if((age / 10) % 10 == 1) 
        result.textContent = age + " лет";
    else if(age % 10 > 4 || age % 10 == 0) 
        result.textContent = age + " лет";
    else if(age % 10 == 1) 
        result.textContent = age + " год";
    else result.textContent = age + " года";
}