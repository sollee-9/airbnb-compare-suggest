"use client";
import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

function MapArea({ searchResults }) {
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
   console.log(searchResults[0]);
   return (
      <Map
         mapStyle="mapbox://styles/sl9999/clopy8jwd005g01r69s410okr"
         mapboxAccessToken={process.env.mapbox_key}
         {...viewState}
         onMove={(evt) => setViewState(evt.viewState)}
      >
         {searchResults.map((room) => (
            <Marker
               longitude={room.long}
               latitude={room.lat}
               offsetLeft={-20}
               offsetTop={-10}
            >
               <button
                  className="absolute bg-white rounded-full border-[1px] border-gray-300 w-12 h-7 shadow-md font-medium text-[14px]
                  hover:scale-110 hover:z-50 -z-50 transition duration-200 ease-out"
               >
                  {room.total.slice(0, -5)}
               </button>
            </Marker>
         ))}
      </Map>
   );
}

export default MapArea;
