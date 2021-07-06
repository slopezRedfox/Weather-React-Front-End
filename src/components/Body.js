/*
 * Copyright (C) 2021
 * All Rights Reserved.
 *
 *
 * Author: Santiago López <santiago241996@gmail.com>
 */

/**
 * @function Body
 *
 * @param {*} weather
 * @returns
 */

import "./Body.css";

export const Body = ({ weather, handlerClean }) => {
  return (
    <div className="body-container">
      <div>
        <div className="body-place">{weather.place}</div>
        <div className="body-line"></div>
        <div className="body-temp">{weather.tempeture} </div>
        <div className="body-temp-max-min">{weather.minTemp}</div>
        <div className="body-pressure">Pressure: {weather.pressure}</div>
        <div className="body-humidity">Humidity: {weather.humidity}</div>
        <div className="body-wind">Wind Speed: {weather.wind}</div>
        <div
          className="body-btn"
          variant="contained"
          onClick={() => {
            handlerClean();
          }}
        >
          Clear
        </div>
      </div>
    </div>
  );
};
