import React from "react";
import TimeStamp from "./TimeStamp";

export default function CurrentWeather(props) {
  return (
    <div className="currentWeather">
      <h1>{props.data.city}</h1>
      <h2>
        <TimeStamp date={props.data.date} />
      </h2>
      <div className="row">
        <div className="col">
          <ul>
            <li>{Math.round(props.data.temperature)}˚C</li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <div className="col"></div>
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind speed: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
