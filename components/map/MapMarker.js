import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import Image from "next/image";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

function MapMarker({ searchResults }) {
   const [selected, setSelected] = useState(0);
   const [hearted, setHearted] = useState(false);

   return (
      <>
         {searchResults.map((room) => (
            <div key={room.long}>
               <Marker
                  longitude={room.long}
                  latitude={room.lat}
                  offsetLeft={-20}
                  offsetTop={-10}
               >
                  <button
                     onClick={() => setSelected(room.long)}
                     className="absolute bg-white rounded-full border-[1px] border-gray-300 w-12 h-7 shadow-md font-medium text-[14px]
              hover:scale-110 hover:z-50 -z-50 transition duration-200 ease-out"
                  >
                     {room.total.slice(0, -5)}
                  </button>
               </Marker>

               {room.long === selected ? (
                  <Popup
                     closeOnClick={false}
                     onClose={() => setSelected("")}
                     latitude={room.lat}
                     longitude={room.long}
                  >
                     <div className="flex flex-col w-[100%] min-h-[300px]">
                        <div className="relative w-[100%] aspect-[6/4]">
                           <Image
                              src={room.img}
                              alt={room.title}
                              fill
                              objectFit="cover"
                              className="rounded-t-xl"
                           />
                           <HeartIcon
                              onClick={() => setHearted(!hearted)}
                              className={`cursor-pointer absolute h-6 right-4 top-4 ${
                                 hearted
                                    ? "text-[#ff395c]"
                                    : "text-[rgba(0,0,0,0.5)]"
                              }`}
                           />
                        </div>
                        <div className="flex-col p-4">
                           <div className="flex justify-between items-start">
                              <h2 className="text-[#222222] text-[15px] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                                 {room.location}
                              </h2>
                              <div className="flex items-center">
                                 <StarIcon className="h-3 ml-3 mr-1" />
                                 <p className="text-[#222222] text-[15px] font-light">
                                    {room.star}
                                 </p>
                              </div>
                           </div>
                           <p className="text-[#727272] text-[15px] font-light leading-5 my-1">
                              {room.title}
                           </p>
                           <div className="flex">
                              <p className="text-[#222222] font-medium text-[15px]">{`${
                                 room.price.split(" ")[0]
                              }`}</p>
                              &nbsp;
                              <p className="text-[#222222] text-[15px] font-light">
                                 {" "}
                                 night
                              </p>
                           </div>
                        </div>
                     </div>
                  </Popup>
               ) : null}
            </div>
         ))}
      </>
   );
}

export default MapMarker;
