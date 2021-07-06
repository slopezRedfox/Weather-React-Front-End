/*
 * Copyright (C) 2021
 * All Rights Reserved.
 *
 * Author: Santiago López <santiago241996@gmail.com>
 */

// React Imports
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";

// Component Imports
import "./App.css";
import { Selector } from "./components/Selector";
import { Body } from "./components/Body";

// Constants Imports
import { constants } from "./data/constants";

/**
 *
 * @returns App View
 */
export default function App() {
  //Get all the constants
  const { MAPBOX_TOKEN } = constants;
  const { WEATHER_TOKEN } = constants;
  const { initLatitude } = constants;
  const { initLongitude } = constants;

  /**
   * @param viewport
   * It's use to get the latitude and longitude of the place selected on
   * the dropdown selector.
   */
  const [viewport, setViewport] = useState({
    latitude: initLatitude,
    longitude: initLongitude,
    zoom: 8,
  });

  /**
   * @param weather
   * Contain all the data of the place including tempeture, humidity, wind
   * speed, etc. All this data is display on the screen and dipends on the
   * viewport data.
   */
  const [weather, setWeather] = useState({
    place: "",
    tempeture: "",
    pressure: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    wind: "",
  });

  //References needed for Geocoder and MapGL work properly
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  /**
   * @function handlerGetWeather
   *
   * Get the weather information base on the place selected on the dropdown
   *
   * @param {float} lat longitude of the place selected
   * @param {float} lon latitude of the place selected
   */
  const handlerGetWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_TOKEN}`
    )
      .then((response) => response.json())
      .then((result) => {
        setWeather({
          place: result.name + ", " + result.sys.country,
          tempeture: parseFloat(result.main.temp - 273.15).toFixed(2),
          minTemp: parseFloat(result.main.temp_min - 273.15).toFixed(2),
          maxTemp: parseFloat(result.main.temp_max - 273.15).toFixed(2),
          humidity: result.main.humidity,
          pressure: result.main.pressure,
          wind: result.wind.speed,
        });
      })
      .catch((error) => console.log("error", error));
  };

  const handlerClean = () => {
    setWeather({
      place: "",
      tempeture: "",
      minTemp: "",
      maxTemp: "",
      humidity: "",
      pressure: "",
      wind: "",
    });
  };

  return (
    <div className="split">
      <div className="left">
        <Selector
          mapRef={mapRef}
          handleViewportChange={handleViewportChange}
          viewport={viewport}
          MAPBOX_TOKEN={MAPBOX_TOKEN}
          geocoderContainerRef={geocoderContainerRef}
          handlerClean={handlerClean}
          handlerGetWeather={handlerGetWeather}
        />
      </div>
      <div className="right">
        <Body weather={weather} />
      </div>
    </div>
  );
}
