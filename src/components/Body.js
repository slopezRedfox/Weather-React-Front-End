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
 * @param {*} viewport
 * @param {*} findWeather
 * @returns
 */
export const Body = ({ weather, viewport, findWeather }) => {
  return (
    <div style={{ marginTop: 100, marginLeft: 40 }}>
      <button
        onClick={() => {
          findWeather(viewport.latitude, viewport.longitude);
        }}
      >
        Find Me
      </button>
      <div>{weather.place}</div>
      <div>{weather.tempeture} °C </div>
      <div>
        {weather.minTemp} / {weather.maxTemp}{" "}
      </div>

      <div>Humidity: {weather.humidity} % </div>
      <div>Pressure: {weather.pressure} hPa </div>

      <div>wind: {weather.wind} m/s</div>
    </div>
  );
};
