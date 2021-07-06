/*
 * Copyright (C) 2021
 * All Rights Reserved.
 *
 *
 * Author: Santiago López <santiago241996@gmail.com>
 */

// React Imports
import Button from "@material-ui/core/Button";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

import "./Selector.css";

/**
 * @function Selector
 *
 * @param {*} mapRef
 * @param {*} handleViewportChange
 * @param {*} viewport
 * @param {*} MAPBOX_TOKEN
 * @param {*} geocoderContainerRef
 * @returns
 */
export const Selector = ({
  mapRef,
  handleViewportChange,
  viewport,
  MAPBOX_TOKEN,
  geocoderContainerRef,
  handlerClean,
  handlerGetWeather,
}) => {
  return (
    <>
      <div className="selector-first-container">
        <div ref={geocoderContainerRef} />
        <MapGL
          ref={mapRef}
          {...viewport}
          width="100%"
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
      </div>
      <div className="selector-second-container">
        <div
          className="selector-btn"
          variant="contained"
          onClick={() => {
            handlerGetWeather(viewport.latitude, viewport.longitude);
          }}
        >
          Find Me
        </div>
      </div>
      <div className="selector-third-container">
        <div
          className="selector-btn"
          variant="contained"
          onClick={() => {
            handlerClean();
          }}
        >
          Clear
        </div>
      </div>
    </>
  );
};
