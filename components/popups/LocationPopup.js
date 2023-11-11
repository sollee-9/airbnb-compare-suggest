import React from "react";
import SearchRegionCard from "../cards/SearchRegionCard";
import { searchRegionData } from "../../data/searchRegionData";

function LocationPopup() {
   return (
      <div
         className="flex-col absolute h-[460px] bg-white w-[500px]
               top-[70px] rounded-[30px] shadow-lg justify-start p-8 border border-gray-200 z-50"
      >
         {/* Header Text */}
         <p className="font-medium text-sm mb-4">Search by region</p>

         <div className="grid grid-cols-3 gap-x-3 gap-y-8">
            {searchRegionData.map(({ img, alt, text }) => (
               <SearchRegionCard
                  key={alt}
                  img={img}
                  alt={alt}
                  text={text}
               />
            ))}
         </div>
      </div>
   );
}

export default LocationPopup;
