import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function MobileFooter() {
   return (
      <div
         className="flex fixed bottom-0 w-[100%] h-[70px] border-t-[0.5px] bg-white
        border-[#eeeeee] justify-between px-6 py-3"
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
   );
}

export default MobileFooter;
