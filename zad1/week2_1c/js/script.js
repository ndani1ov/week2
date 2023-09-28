function makeDecision() {
    const selectDay = document.getElementById("day");
    const selectTemperature = document.getElementById("temperature");
    const selectPrecipitation = document.getElementById("precipitation");
    const selectWind = document.getElementById("wind");
    const selectHumidity = document.getElementById("humidity");
  
    const day = selectDay.value;
    const temperature = selectTemperature.value;
    const precipitation = selectPrecipitation.value;
    const wind = selectWind.value;
    const humidity = selectHumidity.value;
  
    let playBadminton = false;
  
    if (day === "sunday" && temperature === "warm" && (precipitation === "clear" || precipitation === "cloudy") && wind === "no" && humidity === "low") {
      playBadminton = true;
    }
  
    const result = document.getElementById("result");
    if (playBadminton) {
      result.innerText = "Идите играть!";
    } else {
      result.innerText = "Нет";
    }
  }