import React from "react";
import TimeStamp from "./TimeStamp";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentWeather(props) {
  return (
    <div className="currentWeather">
      <h1>{props.data.city}</h1>
      <h2>
        <TimeStamp date={props.data.date} />
      </h2>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              <WeatherTemperature celsius={props.data.temperature} />
            </li>
            <li>
              <WeatherIcon code={props.data.icon} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind speed: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
