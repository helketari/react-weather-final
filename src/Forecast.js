import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "14b04c33525e63089effa5297a33ce92";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="day">Thu</div>
          <WeatherIcon code="01d" size={36} />
          <div className="temperatures">
            <span className="max">19˚</span>
            <span className="min">10˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
