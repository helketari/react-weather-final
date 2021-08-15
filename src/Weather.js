import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });

    function search() {
      let apiKey = "14b04c33525e63089effa5297a33ce92";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function updatecity(event) {
      setCity(event.target.value);
    }

    if (weather.ready) {
      return (
        <div className="weather">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city"
              autofocus="on"
              onChange={updateCity}
            />
            <input type="submit" value="Search" />
          </form>
          <CurrentWeather data={weather} />
        </div>
      );
    } else {
      search();
      return "Loading...";
    }
  }
}
