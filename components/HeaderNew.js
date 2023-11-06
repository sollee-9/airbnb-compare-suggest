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

function HeaderNew() {
   const [searchInput, setSearchInput] = useState("");
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());

   const [searchOpen, setSearchOpen] = useState(false);
   const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
   };

   const handleDateSelect = (ranges) => {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
   };

   return searchOpen ? (
      <HeaderSearch />
   ) : (
      <header className="sticky top-0 z-50 grid sm:grid-cols-2 md:grid-cols-3 bg-white shadow-md p-5 md:px-10">
         {/* Left */}
         <div className="hidden md:flex relative items-center h-10 cursor-pointer my-auto">
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

         {/* Middle */}
         {/* Search Bar Medium */}
         <div className="hidden md:flex items-center border-[1px] shadow-md rounded-full py-2 border-[#dedede]">
            <button
               className="text-[#242424] font-medium border-r-[1px] px-4 flex-grow text-sm 
            text-ellipsis	whitespace-nowrap overflow-hidden"
               onClick={() => setSearchOpen(true)}
            >
               Anywhere
            </button>
            <button className="text-[#242424] font-medium border-r-[1px] px-4 flex-grow text-sm text-ellipsis	whitespace-nowrap overflow-hidden">
               Any Week
            </button>
            <button className="text-[#7a7a7a] px-4 flex-grow text-sm text-ellipsis	whitespace-nowrap overflow-hidden">
               Add guests
            </button>
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-[#ff395c] text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2 font-extrabold" />
         </div>
         {/* Search Bar Small */}
         <div className="sm:flex md:hidden items-center border-[1px] shadow-md rounded-full py-2 border-[#dedede] flex-grow">
            <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-[#ff395c] text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2 stroke-2" />
            <button>
               <h3>Anywhere</h3>
               <p>Any week · Add guests</p>
            </button>
         </div>

         {/* Right Bigger Screen*/}
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

         {/* Right Small Screen */}
         <div className="sm:flex md:hidden relative border border-gray-400 rounded-full justify-center items-center h-9 w-9 text-center">
            <AdjustmentsHorizontalIcon className="h-6 justify-center items-center" />
         </div>
      </header>
   );
}

export default HeaderNew;
