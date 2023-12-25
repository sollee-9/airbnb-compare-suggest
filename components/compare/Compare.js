"use client";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import {
   SparklesIcon,
   ArrowUpTrayIcon,
   EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";

function Compare() {
   const goToWisthlistLocation = () => {
      router.push("/wishlist?location=Paris");
   };

   return (
      <div className="flex mt-6 justify-between w-[100%] px-11">
         <div className="flex">
            <button onClick={() => goToWisthlistLocation}>
               <ArrowLeftIcon className="h-6 " />
            </button>
            <h1 className="text-xl font-medium my-2 ml-2">Paris</h1>
         </div>
         <div className="flex items-baseline">
            <button className="flex relative justify-center items-center border rounded-full h-10 px-2">
               <SparklesIcon className="h-4 mr-1" />
               <p className="text-sm">Set Priorities</p>
            </button>
            <button className="mx-4">
               <ArrowUpTrayIcon className="h-5" />
            </button>
            <button>
               <EllipsisHorizontalIcon className="h-5" />
            </button>
         </div>
      </div>
   );
}

export default Compare;
