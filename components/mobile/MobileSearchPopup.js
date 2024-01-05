import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import MobileLocation from "./MobileLocation";
import MobileFooter from "./MobileFooter";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
   setSelection,
   getSelection,
} from "../../app/GlobalRedux/Features/selection/selectionSlice";
import GuestsPopup from "../popups/GuestsPopup";
import DatePopup from "../popups/DatePopup";

function MobileSearchPopup({
   searchInput,
   setSearchInput,
   startDate,
   endDate,
   setStartDate,
   setEndDate,
   numAdults,
   setNumAdults,
   numChildren,
   setNumChildren,
   numInfants,
   setNumInfants,
   numPets,
   setNumPets,
}) {
   const selection = useSelector(getSelection);
   const dispatch = useDispatch();

   const router = useRouter();

   // Search: push query URL
   const searchLocation = () => {
      router.push(
         `/search?location=${searchInput}&startDate=${startDate}&endDate=${endDate}&numAdults=${numAdults}&numChildren=${numChildren}&numInfants=${numInfants}&numPets=${numPets}`
      );
      // close search
      dispatch(setSelection(""));
   };

   return (
      <div className="flex flex-col fixed z-[99] sm:hidden top-0 left-0 bottom-0 right-0 bg-[#f7f7f7] h-screen w-screen overflow-scroll">
         <div className="relative flex-col items-center justify-center">
            {/* Header */}
            <div className="grid grid-cols-3 p-4 w-full">
               <button
                  className="flex items-center justify-center border-[1px] border-[#b0b0b0] hover:border-[#e9e9e9] 
                     shadow-sm rounded-full h-8 w-8 bg-white hover:scale-105 transition duration-150 ease-out"
                  onClick={() => {
                     dispatch(setSelection(""));
                  }}
               >
                  <XMarkIcon className="h-5" />
               </button>

               <div className="flex justify-between">
                  <h2 className="font-medium mr-4">Stays</h2>
                  <h2 className="font-medium">Experiences</h2>
               </div>
            </div>
         </div>

         {/* Cards */}
         <div className="flex flex-col items-center space-y-2 flex-grow pb-2">
            <MobileLocation
               searchInput={searchInput}
               setSearchInput={setSearchInput}
            />
            <DatePopup
               startDate={startDate}
               endDate={endDate}
               setStartDate={setStartDate}
               setEndDate={setEndDate}
            />
            <GuestsPopup
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
            className={`${
               selection === "check-in" || selection === "check-out"
                  ? "hidden"
                  : ""
            }`}
         >
            <MobileFooter searchLocation={searchLocation} />
         </div>
      </div>
   );
}

export default MobileSearchPopup;
