function formatAge() {
    var age = document.getElementById("age").value;
    var result = document.getElementById("result");
    if(age % 10 === 1 && age % 100 !== 11) 
        result.textContent = age + " год";
    else if(age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) 
        result.textContent = age + " года";
    else  
        result.textContent = age + " лет";
}