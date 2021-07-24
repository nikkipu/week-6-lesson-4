console.log("hi");

function updateCity(event) {
  event.preventDefault();

  let typeCity = document.querySelector("#type-city");
  let h1 = document.querySelector("#city"); 

  h1.innerHTML = `${typeCity.value}`;

  let apiKey = "0e058f62fe2dafe733ff53545a2cf37c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${typeCity.value}&appid=${apiKey}&unit=metric`;

  axios.get(apiUrl).then(getTemp);
}

function getTemp(response) {
  let currentCityTemp = Math.round(response.data.main.temp);

  let currentTemperature = document.querySelector("#number");
  currentTemperature.innerHTML = `${currentCityTemp}`;
}

let searchCity = document.querySelector("#search");
searchCity.addEventListener("submit", updateCity);

function here(position) {
  console.log(position.coords.longitude);
  console.log(position.coords.latitude);

  let currentLongitude = position.coords.longitude;
  let currentLatitude = position.coords.latitude;

  let apiKey = "0e058f62fe2dafe733ff53545a2cf37c";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLatitude}&lon=${currentLongitude}&appid=${apiKey}&units=metric`;

  axios.get(apiURL).then(showTemperature);
}

// navigator.geolocation.getCurrentPosition(here);

// let now = new Date();

// let current = document.querySelector("#date-time");

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let currentDay = days[now.getDay()];

// let currentHour = now.getHours();
// let currentMinutes = now.getMinutes();

// current.innerHTML = `${currentDay} | ${currentHour}:${currentMinutes}`;


// function changeTemp(event) {
//   event.preventDefault();
//   currentTemperature.innerHTML = `20°`
// }

// let celsius = document.querySelector("#celsius");
// celsius.addEventListener("click", changeTemp);

// function changeTempBack (event) {
//     event.preventDefault();
//     currentTemperature.innerHTML = `77°`;

// }

// let farenheit = document.querySelector("#farenheit");
// farenheit.addEventListener("click", changeTempBack);

