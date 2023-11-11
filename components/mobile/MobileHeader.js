"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setSelection } from "../../app/GlobalRedux/Features/selection/selectionSlice";

function MobileHeader({ location, dates, guests }) {
   const dispatch = useDispatch();

   return (
      <div className="fixed top-0 z-50 flex sm:hidden p-5 items-center bg-white shadow-sm w-[100%]">
         <div
            className="flex items-center rounded-full 
                 py-2 px-2 bg-[#f7f7f7] flex-grow h-14 cursor-pointer"
            onClick={() => dispatch(setSelection("where"))}
         >
            <MagnifyingGlassIcon className="h-10 text-theme-black p-2 cursor-pointer" />
            <button className="flex-col ml-2">
               <h3 className="text-start text-sm font-medium">
                  {location ? location : "Anywhere"}
               </h3>
               <div className="flex items-baseline text-xs text-[#7b7b7b] font-light">
                  <p>{dates === "" ? "Any week" : dates}</p>
                  <p className="font-bold text-sm mx-1">·</p>
                  <p>
                     {!guests
                        ? "Add guests"
                        : guests > 1
                        ? `${guests} guests`
                        : "1 guest"}
                  </p>
               </div>
            </button>
         </div>

         <div
            className="flex sm:hidden relative border border-gray-400 rounded-full 
                justify-center items-center h-9 w-9 text-center ml-2"
         >
            <AdjustmentsHorizontalIcon className="h-6 w-6 justify-center items-center" />
         </div>
      </div>
   );
}

export default MobileHeader;
