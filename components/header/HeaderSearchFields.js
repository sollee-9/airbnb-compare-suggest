"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
   setSelection,
   getSelection,
} from "../../app/GlobalRedux/Features/selection/selectionSlice";
// Helpers
import { formatDateRange } from "../../helpers/datesHelper";

function HeaderSearchFields() {
   //Redux
   const selection = useSelector(getSelection);
   const dispatch = useDispatch();
   //
   const router = useRouter();
   const params = useSearchParams();

   const location = params.get("location");
   const startDate = params.get("startDate");
   const endDate = params.get("endDate");
   const numAdults = params.get("numAdults");
   const numChildren = params.get("numChildren");
   const numInfants = params.get("numInfants");
   const numPets = params.get("numPets");

   const guests =
      parseInt(numAdults) +
      parseInt(numChildren) +
      parseInt(numInfants) +
      parseInt(numPets);

   const dateRange = formatDateRange(startDate, endDate);

   return (
      <div
         className="sm:h-[50px] sm:flex items-center border-[1px] shadow-md rounded-full py-2
 border-[#dedede] min-w-[370px] max-w-[450px] px-2 md:px-0"
      >
         <button
            className="text-[#242424] font-medium border-r-[1px] px-4 flex-grow text-sm 
      text-ellipsis	whitespace-nowrap overflow-hidden"
            onClick={() => dispatch(setSelection("where"))}
         >
            {location ? location : "Anywhere"}
         </button>
         <button
            className="text-[#242424] font-medium border-r-[1px] px-4 flex-grow text-sm text-ellipsis	
       whitespace-nowrap overflow-hidden"
            onClick={() => dispatch(setSelection("check-in"))}
         >
            {dateRange === "" ? "Any week" : dateRange}
         </button>
         <button
            onClick={() => dispatch(setSelection("who"))}
            className={`pl-4 pr-1 flex-grow text-sm text-ellipsis whitespace-nowrap overflow-hidden
 ${guests ? `text-[#242424] font-medium` : `text-[#7a7a7a]`}`}
         >
            {!guests
               ? "Add guests"
               : guests > 1
               ? `${guests} guests`
               : "1 guest"}
         </button>
         <MagnifyingGlassIcon
            onClick={() => dispatch(setSelection("search"))}
            className="inline-flex h-8 bg-airbnb-pink hover:bg-airbnb-dark-pink text-white rounded-full p-2 cursor-pointer 
       mx-auto md:mx-2 font-extrabold"
         />
      </div>
   );
}

export default HeaderSearchFields;
