"use client";
import React from "react";
import RoomInfoCard from "../components/cards/RoomInfoCard";
import Map from "../components/map/Map";
import { useSearchParams } from "next/navigation";
import { roomsData } from "../data/roomsData";

function RoomResults() {
   const params = useSearchParams();
   const location = params.get("location");
   return (
      <div>
         {/* Room Results */}
         <main className="grid grid-cols-1 sm:flex">
            <section
               className="flex-grow w-[100%] z-20  bg-white 
          absolute top-[300px] order-2 rounded-t-[30px]
       sm:order-1 sm:relative sm:top-0 sm:rounded-none "
            >
               <p className="text-sm font-medium m-6">
                  {`Over 1,000 places in ${location}`}
               </p>
               <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[100%] gap-8 gap-x-6">
                  {roomsData.map(
                     ({
                        img,
                        location,
                        title,
                        description,
                        star,
                        price,
                        total,
                        long,
                        lat,
                     }) => (
                        <RoomInfoCard
                           key={`${long}${lat}`}
                           img={img}
                           location={location}
                           title={title}
                           description={description}
                           star={star}
                           price={price}
                           total={total}
                           long={long}
                           lat={lat}
                        />
                     )
                  )}
               </div>
            </section>

            {/* Map Area */}
            <section
               className="flex flex-grow order-1 
             w-[100%] h-[320px]
             sm:hidden 
             md:order-2 md:flex md:w-[45%] md:max-w-[550px] md:h-[1400px]"
            >
               <Map searchResults={roomsData} />
            </section>
         </main>
      </div>
   );
}

export default RoomResults;
