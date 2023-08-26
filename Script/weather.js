//API_KEY = "7a57e0eb094bf63e8e3fef9c28de69bd";
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
class Weather {
  constructor(apiKey, city) {
    this.apiKey = apiKey;
    this.city = city;
  }
  async fetchWeatherByCity() {
    try {
      let data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`
      );
      console.log(data);
      let actualData = await data.json();
      return actualData;
    } catch (err) {
      console.log(err);
    }
  }
}

const updateWeatherData = (
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
  const sunriseElm = document.querySelector("#sunrise");
  const sunsetELm = document.querySelector("#sunset");

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
export { updateWeatherData };
