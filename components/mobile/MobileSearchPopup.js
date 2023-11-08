import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import MobileLocation from "./MobileLocation";
import MobileDates from "./MobileDates";
import MobileGuests from "./MobileGuests";
import MobileFooter from "./MobileFooter";

function MobileSearchPopup({ setMobileSearch }) {
   const [mobileSelect, setMobileSelect] = useState("Where");
   return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#f7f7f7] h-[100%] w-[100%]">
         <div className="relative flex-col items-center justify-center">
            {/* Header */}
            <div className="grid grid-cols-3 p-4">
               <button
                  className="flex items-center justify-center border-[1px] border-[#b0b0b0] hover:border-[#e9e9e9] 
                     shadow-sm rounded-full h-8 w-8 bg-white hover:scale-105 transition duration-150 ease-out"
                  onClick={() => setMobileSearch(false)}
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
         <div className="flex-col justify-center items-center">
            <MobileLocation
               mobileSelect={mobileSelect}
               setMobileSelect={setMobileSelect}
            />
            <MobileDates
               mobileSelect={mobileSelect}
               setMobileSelect={setMobileSelect}
            />
            <MobileGuests
               mobileSelect={mobileSelect}
               setMobileSelect={setMobileSelect}
            />
         </div>

         {/* Footer */}
         <MobileFooter />
      </div>
   );
}

export default MobileSearchPopup;
