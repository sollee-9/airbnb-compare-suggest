import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import MobileSearchPopup from "./MobileSearchPopup";

function MobileHeader() {
   const [mobileSearch, setMobileSearch] = useState(false);

   return (
      <div className="fixed top-0 z-50 flex sm:hidden p-5 items-center bg-white shadow-sm w-[100%]">
         <div
            className="flex items-center border-[1px] shadow-md rounded-full 
                 py-2 px-2 border-[#ebebeb] flex-grow h-14 cursor-pointer"
            onClick={() => setMobileSearch(true)}
         >
            <MagnifyingGlassIcon className="h-10 text-[#222222] p-2 cursor-pointer" />
            <button className="flex-col ml-2">
               <h3 className="text-start text-sm font-medium">
                  Anywhere
               </h3>
               <p className="text-xs text-[#7b7b7b]">
                  Any week · Add guests
               </p>
            </button>
         </div>

         <div
            className="flex sm:hidden relative border border-gray-400 rounded-full 
                justify-center items-center h-9 w-9 text-center ml-2"
         >
            <AdjustmentsHorizontalIcon className="h-6 w-6 justify-center items-center" />
         </div>
         {mobileSearch ? (
            <MobileSearchPopup setMobileSearch={setMobileSearch} />
         ) : null}
      </div>
   );
}

export default MobileHeader;
