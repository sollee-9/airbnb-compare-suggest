"use client";
import React, { useState, useEffect } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import MapMarker from "./MapMarker";

function MapArea({ searchResults }) {
   const [selectedLong, setSelectedLong] = useState(0);

   const coordinates = searchResults.map((results) => ({
      longitude: results.long,
      latitude: results.lat,
   }));

   const center = getCenter(coordinates);

   const [viewState, setViewState] = useState({
      width: "100%",
      height: "100%",
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11,
   });

   useEffect(() => {
      setSelectedLong(selectedLong);
   }, []);

   return (
      <Map
         mapStyle="mapbox://styles/sl9999/clopy8jwd005g01r69s410okr"
         mapboxAccessToken={process.env.mapbox_key}
         {...viewState}
         onMove={(evt) => setViewState(evt.viewState)}
      >
         <MapMarker searchResults={searchResults} />
      </Map>
   );
}

export default MapArea;
