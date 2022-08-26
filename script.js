function formattedDate(date) {
  let currentDate = todaysDate.getDate();
  let daysIndex = todaysDate.getDay();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let monthsIndex = todaysDate.getMonth();
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return `${day[daysIndex]}, ${month[monthsIndex]} ${currentDate}`;
}

let dateElement = document.querySelector("#date");
let todaysDate = new Date();
dateElement.innerHTML = formattedDate(todaysDate);

function formattedTime(date) {
  let hour = todaysDate.getHours();
  let minutes = todaysDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hour}:${minutes}`;
}
let timeElement = document.querySelector("#time");
let currentTime = new Date();
timeElement.innerHTML = formattedTime(currentTime);

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML =
    Math.round(response.data.main.temp) + "°F";
  document.querySelector("#humidity").innerHTML =
    response.data.main.humidity + "%";
  document.querySelector("#wind").innerHTML =
    Math.round(response.data.wind.speed) + " mph";
  document.querySelector("#weather").innerHTML =
    response.data.weather[0].description;
}

function search(event) {
  event.preventDefault();
  let apiKey = "7c61b136668f7af4823dfeb0aff45e2d";
  let cityName = document.querySelector("#search-input").value;
  let unit = `units=imperial`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&${unit}`;

  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
