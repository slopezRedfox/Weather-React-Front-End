import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2FudGkyNCIsImEiOiJja3FyYXVxeHoyZnBhMnhxdGx1YnZ4MnZlIn0.-p4ydcCyljRF25TWRDJYtg";

const WEATHER_TOKEN = "00d4e900989bd20e786afa22383d03bd";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const [weather, setWeather] = useState({
    place: "",
    tempeture: "",
    humidity: "",
    wind: "",
  });

  const findWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_TOKEN}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setWeather({
          place: result.name + ", " + result.sys.country,
          tempeture: parseFloat(result.main.temp - 273.15).toFixed(2),
          humidity: result.main.humidity,
          wind: result.wind.speed,
        });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div style={{ height: "100vh" }}>
      <div
        ref={geocoderContainerRef}
        style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}
      />
      <MapGL
        ref={mapRef}
        {...viewport}
        width="1%"
        height="0%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        <Geocoder
          mapRef={mapRef}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          position="top-left"
        />
      </MapGL>
      <div style={{ marginTop: 100, marginLeft: 40 }}>
        <button
          onClick={() => {
            findWeather(viewport.latitude, viewport.longitude);
          }}
        >
          Find Me
        </button>
        <div>{weather.place}</div>
        <div>tempeture: {weather.tempeture} °C </div>
        <div>humidity: {weather.humidity} % </div>
        <div>wind: {weather.wind} m/s</div>
      </div>
    </div>
  );
}
