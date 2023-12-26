import React, { useEffect, useState } from "react";
import {
   essentials,
   features,
   safety,
   accessibility,
} from "../../data/prioritiesList";
import CheckboxPane from "./CheckboxPane";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function PrioritiesDropdown({ setDropdown }) {
   const router = useRouter();

   const showRecommended = () => {
      setDropdown(false);
      // Generate random number for recommendation [0,1]
      const rec = Math.floor(Math.random() * 2);

      router.push(`/compare?recommended=${rec}`);
   };

   return (
      <div
         className="absolute border bg-white rounded-2xl h-[500px] w-[75%] shadow-xl z-50
        top-4 flex-col flex left-0 right-0 mr-auto ml-auto"
      >
         <div className="flex w-[100%] p-5 border-b-[1px]">
            <button onClick={() => setDropdown(false)}>
               <XMarkIcon className="h-5" />
            </button>

            <div className="flex flex-grow justify-center">
               <h1 className="font-medium">
                  Tell us what's important to you
               </h1>
            </div>
         </div>

         <div className="w-[100%] px-10 py-4 overflow-y-scroll">
            <CheckboxPane title="Amenities" data={essentials} />
            <CheckboxPane title="Features" data={features} />
            <CheckboxPane title="Safety" data={safety} />
            <CheckboxPane
               title="Accessibility"
               data={accessibility}
            />

            <div className="flex justify-end mt-3">
               <button
                  onClick={() => showRecommended()}
                  className="bg-airbnb-dark-pink text-white p-3 rounded-md font-light"
               >
                  Recommend
               </button>
            </div>
         </div>
      </div>
   );
}

export default PrioritiesDropdown;
