import React, { useState } from "react";
import { Marker, Popup } from "react-map-gl";
import Image from "next/image";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

function MapMarker({ searchResults }) {
   const [roomSelected, setRoomSelected] = useState(0);
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
                     onClick={() => setRoomSelected(room.long)}
                     className={`absolute rounded-full border-[1px] border-gray-300 shadow-md font-medium text-[14px]
                        hover:scale-110 hover:z-50 -z-50 transition duration-200 ease-out px-2 py-1 whitespace-nowrap ${
                           room.long === roomSelected
                              ? "bg-black text-white"
                              : "bg-white text-black"
                        }`}
                  >
                     {room.total.slice(0, -5)}
                     {"  "}USD
                  </button>
               </Marker>

               {room.long === roomSelected ? (
                  <Popup
                     closeOnClick={false}
                     onClose={() => setRoomSelected("")}
                     latitude={room.lat}
                     longitude={room.long}
                  >
                     <div className="flex flex-col w-[100%] h-full">
                        <div className="relative w-[100%] min-h-[150px] h-[60%]">
                           <Image
                              src={room.img}
                              alt={room.title}
                              fill
                              objectFit="cover"
                              className="rounded-t-xl h-full"
                           />
                           <HeartIcon
                              onClick={() => setHearted(!hearted)}
                              className={`cursor-pointer absolute h-6 right-5 top-4 ${
                                 hearted
                                    ? "text-[#ff395c]"
                                    : "text-[rgba(0,0,0,0.5)]"
                              }`}
                           />
                        </div>
                        <div className="flex-col p-3">
                           <div className="flex justify-between items-start">
                              <h2 className="text-theme-black text-[15px] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
                                 {room.title}
                              </h2>
                              <div className="flex items-center">
                                 <StarIcon className="h-3 ml-3 mr-1" />
                                 <p className="text-theme-black text-[15px] font-light whitespace-nowrap">
                                    {room.star}
                                    {"  "} {`(${room.reviews})`}
                                 </p>
                              </div>
                           </div>
                           <p className="text-[#727272] text-[15px] font-light text-ellipsis whitespace-nowrap overflow-hidden my-1">
                              {room.description}
                           </p>
                           <div className="flex items-baseline text-[14px] mb-1 mt-2">
                              <p className="text-theme-black font-medium">{`${
                                 room.price.split(" ")[0]
                              }   USD`}</p>
                              &nbsp;
                              <p className="text-theme-black font-light">
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
