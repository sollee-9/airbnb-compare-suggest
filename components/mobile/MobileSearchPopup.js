import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import MobileLocation from "./MobileLocation";
import MobileDates from "./MobileDates";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import GuestsPopup from "../popups/GuestsPopup";

function MobileSearchPopup({
   location,
   selected,
   setSelected,
   numAdults,
   setNumAdults,
   numChildren,
   setNumChildren,
   numInfants,
   setNumInfants,
   numPets,
   setNumPets,
}) {
   const router = useRouter();

   const searchLocation = () => {
      router.push(
         `/search?location=${searchInput}&startDate=${startDate}&endDate=${endDate}&numAdults=${numAdults}&numChildren=${numChildren}&numInfants=${numInfants}&numPets=${numPets}`
      );
      // close search
      setSelected("");
   };

   return (
      <div className="fixed z-[99] sm:hidden top-0 left-0 bottom-0 right-0 bg-[#f7f7f7] h-[100%] w-[100%]">
         <div className="relative flex-col items-center justify-center">
            {/* Header */}
            <div className="grid grid-cols-3 p-4">
               <button
                  className="flex items-center justify-center border-[1px] border-[#b0b0b0] hover:border-[#e9e9e9] 
                     shadow-sm rounded-full h-8 w-8 bg-white hover:scale-105 transition duration-150 ease-out"
                  onClick={() => setSelected("")}
               >
                  <XMarkIcon className="h-5" />
               </button>

               <div className="flex justify-evenly">
                  <div className="border-b-2 border-[#222222] cursor-pointer">
                     <h2 className="font-medium text-[#222222]">
                        Stays
                     </h2>
                  </div>
                  <h2 className="font-medium text-[#717171] cursor-pointer">
                     Experiences
                  </h2>
               </div>
            </div>
         </div>

         {/* Cards */}
         <div className="flex-col justify-center items-center">
            {/* <MobileLocation
               selected={selected}
               setSelected={setSelected}
            /> */}
            {/* <MobileDates
               mobileSelect={mobileSelect}
               setMobileSelect={setMobileSelect}
            /> */}
            <GuestsPopup
               selected={selected}
               setSelected={setSelected}
               numAdults={numAdults}
               setNumAdults={setNumAdults}
               numChildren={numChildren}
               setNumChildren={setNumChildren}
               numInfants={numInfants}
               setNumInfants={setNumInfants}
               numPets={numPets}
               setNumPets={setNumPets}
            />
         </div>

         {/* Footer */}
         <div
            className="fixed bottom-0 w-[100%] h-[70px] border-t-[0.5px] bg-white
        border-[#eeeeee] flex justify-between px-6 py-3"
         >
            <button className="underline text-md font-medium">
               Clear all
            </button>
            <button
               className="bg-[#e61e4f] text-white flex justify-center items-center p-1 w-[120px]
            rounded-md"
            >
               <MagnifyingGlassIcon className="h-5 mr-2" />
               <p>Search</p>
            </button>
         </div>
      </div>
   );
}

export default MobileSearchPopup;
