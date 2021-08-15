import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherWrapper">
          <Weather defaultCity="London" />
        </div>
        <footer>
          <a
            href="https://github.com/helketari/react-weather-final"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Jessica Brosvic
        </footer>
      </div>
    </div>
  );
}
