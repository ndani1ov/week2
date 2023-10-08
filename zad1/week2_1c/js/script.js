const getSelectors = () => {
  const selectDay = document.getElementById("day");
  const selectTemperature = document.getElementById("temperature");
  const selectPrecipitation = document.getElementById("precipitation");
  const selectWind = document.getElementById("wind");
  const selectHumidity = document.getElementById("humidity");
  return {
    selectDay,
    selectTemperature,
    selectPrecipitation,
    selectWind,
    selectHumidity
  };
};

const getValues = (selectors) => {
  const { selectDay, selectTemperature, selectPrecipitation, selectWind, selectHumidity } = selectors;
  const day = selectDay.value;
  const temperature = selectTemperature.value;
  const precipitation = selectPrecipitation.value;
  const wind = selectWind.value;
  const humidity = selectHumidity.value;
  return {
    day,
    temperature,
    precipitation,
    wind,
    humidity
  };
};

const determinePlayBadminton = (values) => {
  const { day, temperature, precipitation, wind, humidity } = values;
  let playBadminton = false;
  
  if (
    day === "sunday" &&
    temperature === "warm" &&
    (precipitation === "clear" || precipitation === "cloudy") &&
    wind === "no" &&
    humidity === "low"
  ) {
    playBadminton = true;
  }
  
  return playBadminton;
};

const displayResult = (playBadminton) => {
  const result = document.getElementById("result");
  if (playBadminton) {
    result.innerText = "Да";
  } else {
    result.innerText = "Нет";
  }
};

const makeDecision = () => {
  const selectors = getSelectors();
  const values = getValues(selectors);
  const playBadminton = determinePlayBadminton(values);
  displayResult(playBadminton);
};