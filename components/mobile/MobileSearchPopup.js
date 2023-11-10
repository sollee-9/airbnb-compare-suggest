import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import MobileLocation from "./MobileLocation";
import MobileFooter from "./MobileFooter";
import { useDispatch, useSelector } from "react-redux";
import {
   setSelectio,
   getSelection,
} from "../../app/GlobalRedux/Features/selection/selectionSlice";
import GuestsPopup from "../popups/GuestsPopup";
import DatePopup from "../popups/DatePopup";

function MobileSearchPopup({
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

   return (
      <div className="fixed z-[99] sm:hidden top-0 left-0 bottom-0 right-0 bg-[#f7f7f7] h-[100%] w-[100%]">
         <div className="relative flex-col items-center justify-center">
            {/* Header */}
            <div className="grid grid-cols-3 p-4">
               <button
                  className="flex items-center justify-center border-[1px] border-[#b0b0b0] hover:border-[#e9e9e9] 
                     shadow-sm rounded-full h-8 w-8 bg-white hover:scale-105 transition duration-150 ease-out"
                  onClick={() => {
                     dispatch(setSelection(""));
                     console.log("x");
                  }}
               >
                  <XMarkIcon className="h-5" />
               </button>

               <div className="flex justify-evenly">
                  <h2 className="font-medium">Stays</h2>
                  <h2 className="font-medium">Experiences</h2>
               </div>
            </div>
         </div>

         {/* Cards */}
         <div className="flex-col justify-center items-center space-y-2">
            <MobileLocation />
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
         <MobileFooter selection={selection} />
      </div>
   );
}

export default MobileSearchPopup;
