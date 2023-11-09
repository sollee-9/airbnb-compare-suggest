import React from "react";
import {
   Bars3Icon,
   GlobeAltIcon,
   HomeIcon,
} from "@heroicons/react/24/outline";

function OptionsHeader() {
   return (
      <header className="h-[80px] z-50 w-[100%] flex justify-between items-center bg-white shadow-sm p-5 md:px-10">
         {/* Carousel */}
         <div className="flex flex-col items-center">
            <HomeIcon className="h-7" />
            <p className="text-xs font-medium">Your search</p>
         </div>
         {/* Filters */}
      </header>
   );
}

export default OptionsHeader;
