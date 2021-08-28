import React from "react";
import TimeStamp from "./TimeStamp";
import WeatherIcon from "./WeatherIcon";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div className="currentWeather">
      <h1>{props.data.city}</h1>
      <h2>
        <TimeStamp date={props.data.date} />
      </h2>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="temperature">
              {Math.round(props.data.temperature)}{" "}
              <span className="unit">˚C</span>{" "}
            </div>
            <div className="text-capitalize">{props.data.description}</div>
          </div>
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
