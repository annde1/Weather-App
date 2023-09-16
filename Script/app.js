import { Weather } from "./weather.js";
import { renderWeatherData } from "./weather.js";
import { displayTime } from "./date.js";
import { getDate } from "./date.js";
import { renderDate } from "./date.js";

//Variables
const API_KEY = "7a57e0eb094bf63e8e3fef9c28de69bd";
const searchInput = document.querySelector("#search-input");
let weather;

window.addEventListener("load", () => {
  //display time immediately and set interval to update the clock every second
  displayTime();
  setInterval(displayTime, 1000);
  //Get the current date and render it
  let obj = getDate();
  renderDate(obj);

  //Function to fetch weather data and update the display
  const fetchAndUpdateWeather = async (city) => {
    weather = new Weather(API_KEY, city);
    try {
      let data = await weather.fetchWeatherByCity();
      let mainData = data.main;
      let cityName = data.name;
      let weatherDescription = data.weather;
      let wind = data.wind.speed;
      const { description, icon } = weatherDescription[0];
      let { feels_like, humidity, pressure, temp, temp_max, temp_min } =
        mainData;

      //Render the weather data on the page
      renderWeatherData(
        cityName,
        Math.floor(temp),
        Math.floor(feels_like),
        Math.floor(temp_min),
        Math.floor(temp_max),
        humidity,
        pressure,
        wind,
        description,
        icon
      );
    } catch (err) {
      console.log(err);
    }
  };

  //When the page is loaded, weather for default city will be displayed
  let defaulCity = encodeURIComponent("New York");
  weather = new Weather(API_KEY, defaulCity);
  fetchAndUpdateWeather(defaulCity);

  //When user clicks enter on the keyboard he will get weather by the city name he chose
  searchInput.addEventListener("keydown", async (e) => {
    if (e.key === "Enter") {
      const city = encodeURIComponent(searchInput.value);
      fetchAndUpdateWeather(city);
    }
  });
});
