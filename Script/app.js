import { Weather } from "./weather.js";
import { updateWeatherData } from "./weather.js";
import { displayTime } from "./date.js";
import { getDate } from "./date.js";
import { updateDate } from "./date.js";

const API_KEY = "7a57e0eb094bf63e8e3fef9c28de69bd";

const searchInput = document.querySelector("#search-input");
let weather;

//display time immediately and set interval to update the clock every second
displayTime();
setInterval(displayTime, 1000);
let obj = getDate();
console.log(obj);
updateDate(obj);

searchInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const city = encodeURIComponent(searchInput.value);
    console.log(city);
    weather = new Weather(API_KEY, city);
    console.log(weather);
    try {
      let data = await weather.fetchWeatherByCity();

      let mainData = data.main;
      let cityName = data.name;
      let weatherDescription = data.weather;
      let wind = data.wind.speed;
      const { description, icon } = weatherDescription[0];
      console.log(description);
      let { feels_like, humidity, pressure, temp, temp_max, temp_min } =
        mainData;
      console.log(temp);
      updateWeatherData(
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
  }
});
