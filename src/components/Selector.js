/*
 * Copyright (C) 2021
 * All Rights Reserved.
 *
 *
 * Author: Santiago López <santiago241996@gmail.com>
 */

// React Imports
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

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
}) => {
  return (
    <>
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
    </>
  );
};
