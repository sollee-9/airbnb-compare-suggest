"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
   MagnifyingGlassIcon,
   UserCircleIcon,
} from "@heroicons/react/24/solid";

import {
   Bars3Icon,
   GlobeAltIcon,
   AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import HeaderSearch from "./HeaderSearch";
import MobileSearchPopup from "./MobileSearchPopup";

function HeaderNew() {
   const [selected, setSelected] = useState("");
   const [mobileSearch, setMobileSearch] = useState(false);

   return selected === "" ? (
      <header className="sticky top-0 z-50 flex justify-between items-center bg-white shadow-md p-5 md:px-10">
         {/* Laptop View */}
         <div className="hidden md:flex relative items-center h-10 cursor-pointer my-auto min-w-[150px]">
            <Image
               src="https://links.papareact.com/qd3"
               style={{
                  objectFit: "contain",
                  objectPosition: "left",
               }}
               fill
               sizes="100vw"
               alt="airbnb logo"
            />
         </div>

         <div className="hidden md:flex items-center border-[1px] shadow-md rounded-full py-2 border-[#dedede] md:w-[370px]">
            <button
               className="text-[#242424] font-medium border-r-[1px] px-4 flex-grow text-sm 
         text-ellipsis	whitespace-nowrap overflow-hidden"
               onClick={() => setSelected("where")}
            >
               Anywhere
            </button>
            <button
               className="text-[#242424] font-medium border-r-[1px] px-4 flex-grow text-sm text-ellipsis	
         whitespace-nowrap overflow-hidden"
               onClick={() => setSelected("check-in")}
            >
               Any Week
            </button>
            <button
               onClick={() => setSelected("who")}
               className="text-[#7a7a7a] px-4 flex-grow text-sm text-ellipsis whitespace-nowrap overflow-hidden"
            >
               Add guests
            </button>
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-[#ff395c] text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2 font-extrabold" />
         </div>

         <div className="hidden md:flex items-center space-x-4 justify-end text-[##222222] text-sm">
            <p className="hidden lg:inline cursor-pointer">
               Airbnb your home
            </p>
            <GlobeAltIcon className="h-6 cursor-pointer" />

            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
               <Bars3Icon className="h-6" />
               <UserCircleIcon className="h-6" />
            </div>
         </div>

         {/* Mobile View */}
         <div
            className="sm:flex md:hidden items-center border-[1px] shadow-md rounded-full 
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
            className="sm:flex md:hidden relative border border-gray-400 rounded-full 
            justify-center items-center h-9 w-9 text-center ml-2"
         >
            <AdjustmentsHorizontalIcon className="h-6 w-6 justify-center items-center" />
         </div>
         {mobileSearch ? (
            <MobileSearchPopup setMobileSearch={setMobileSearch} />
         ) : null}
      </header>
   ) : (
      <HeaderSearch selected={selected} setSelected={setSelected} />
   );
}

export default HeaderNew;
