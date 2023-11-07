import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import LocationPopup from "./LocationPopup";

function MobileSearchPopup({ setMobileSearch }) {
   return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#f7f7f7] z-30 h-[100%] w-[100%]">
         {/* Header */}
         <div className="flex p-4">
            <button
               className="flex items-center justify-center border-[1px] border-[#b0b0b0] hover:border-[#e9e9e9] 
            shadow-sm rounded-full h-8 w-8 bg-white hover:scale-105 transition duration-150 ease-out"
               onClick={() => setMobileSearch(false)}
            >
               <XMarkIcon className="h-5" />
            </button>

            <div className="flex">
               <h2 className="font-medium">Stays</h2>
               <h2 className="font-medium">Experiences</h2>
            </div>
         </div>

         {/* Cards */}
         <LocationPopup />

         {/* Footer */}
      </div>
   );
}

export default MobileSearchPopup;
