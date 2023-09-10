class Weather {
  constructor(apiKey, city) {
    this.apiKey = apiKey;
    this.city = city;
  }
  //Method fetchWeatherByCity is an async method that makes an api call to get current weather based by the city name that user requested or by default city
  async fetchWeatherByCity() {
    try {
      let data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`
      );
      let actualData = await data.json();

      return actualData;
    } catch (err) {
      console.log(err);
    }
  }
}

//Function renderWeatherData renders weather data returned from the async function fetchWeatherByCity
const renderWeatherData = (
  city,
  temp,
  feelsLike,
  min,
  max,
  humidity,
  pressure,
  wind,
  description,
  icon
) => {
  const cityName = document.querySelector("#city-name");
  const iconElm = document.querySelector("#weather-icon");
  const descriptionElm = document.querySelector("#desciption");
  const currentTemp = document.querySelector("#current-temp");
  const feelsLikeTemp = document.querySelector("#feels-like");
  const minimalTemp = document.querySelector("#minimal-temp");
  const maximalTemp = document.querySelector("#maximal-temp");
  const humidityElm = document.querySelector("#humidity");
  const pressureElm = document.querySelector("#pressure");
  const windElm = document.querySelector("#wind-speed");

  cityName.innerText = city;
  iconElm.setAttribute("src", `https://openweathermap.org/img/wn/${icon}.png`);
  descriptionElm.innerText = description;
  currentTemp.innerHTML = `${temp}&degC`;
  feelsLikeTemp.innerHTML = `${feelsLike}&degC`;
  minimalTemp.innerHTML = `${min}&degC`;
  maximalTemp.innerHTML = `${max}&degC`;
  humidityElm.innerHTML = `${humidity}%`;
  pressureElm.innerHTML = `${pressure} hPa`;
  windElm.innerHTML = `${wind} m/s`;
};

export { Weather };
export { renderWeatherData };
