import React, { useState } from "react";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});

  function handleResponse(response) {
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
    });

    setReady(true);

    if (ready) {
      return (
        <div className="weather">
          <form>
            <input
              type="search"
              placeholder="Enter a city"
              onChange={updateCity}
            />
            <input type="submit" value="Search" />
          </form>
          <h1>{city}</h1>
          <h2>Time</h2>
          <div className="row">
            <div className="col">
              <ul>
                <li>{Math.round(weather.temperature)}˚C</li>
                <li>{weather.description}</li>
              </ul>
              <div className="col"></div>
              <ul>
                <li>Humidity: {Math.round(weather.humidity)}%</li>
                <li>Wind speed: {weather.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      let apiKey = "14b04c33525e63089effa5297a33ce92";
      let city = "London";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then(handleResponse);
      return "Loading...";
    }
  }
}
