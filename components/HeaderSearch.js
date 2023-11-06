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
import DatePopup from "./DatePopup";
import LocationPopup from "./LocationPopup";

function HeaderSearch({ selected, setSelected }) {
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());
   console.log("here", startDate.toDateString());
   return (
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
         <div>
            <button className="p-5 font-light underline">
               Stays
            </button>
            <button className="p-5 font-light">Experiences</button>
            <button className="p-5 font-light">
               Online Experiences
            </button>
         </div>

         {/* Right */}
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

         {/* Main */}
         <div
            className="flex border-[1px] rounded-full box-border
         border-[#dedede] col-span-3 w-[70%] mt-3 m-auto h-16 bg-[#ebebeb] relative"
         >
            {/* Popups */}
            {selected === "where" ? (
               <LocationPopup className="absolute" />
            ) : null}
            {selected === "check-in" || selected === "check-out" ? (
               <DatePopup
                  className="absolute"
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
               />
            ) : null}

            <button
               className={`flex-col flex-grow items-start rounded-full p-2 
               ${
                  selected == "where"
                     ? "bg-white shadow-xl "
                     : "bg-none hover:bg-[#dddddd]"
               }`}
               onClick={() => setSelected("where")}
            >
               <h4 className="text-left text-[14px] font-medium ml-4">
                  Where
               </h4>
               <input
                  placeholder="Search destinations"
                  className={`bg-transparent border-none outline-none text-sm ml-4 text-[#808080] ${
                     selected == "where"
                        ? "placeholder-[#808080]"
                        : "placeholder-[#222222] disabled"
                  }`}
               />
            </button>
            <button
               className={`flex-col items-center rounded-full min-w-[130px] p-2   ${
                  selected == "check-in"
                     ? "bg-white"
                     : "bg-none hover:bg-[#dddddd] "
               }`}
               onClick={() => setSelected("check-in")}
            >
               <h4 className="text-left text-[14px] font-medium">
                  Check in
               </h4>
               <p
                  className={`text-sm ${
                     selected == "check-in"
                        ? "text-[#808080]"
                        : "text-[#222222]"
                  }`}
               >
                  {/* Add dates */}
                  {startDate.toDateString().slice(4, 10)}
               </p>
            </button>
            <button
               className={`flex-col items-center rounded-full min-w-[130px] p-2  
               ${
                  selected == "check-out"
                     ? "bg-white"
                     : "bg-none hover:bg-[#dddddd]"
               }`}
               onClick={() => setSelected("check-out")}
            >
               <h4 className="text-left text-[14px] font-medium">
                  Check out
               </h4>
               <p
                  className={`text-sm ${
                     selected == "check-out"
                        ? "text-[#808080]"
                        : "text-[#222222]"
                  }`}
               >
                  {/* Add dates */}
                  {endDate.toDateString().slice(4, 10)}
               </p>
            </button>

            <button
               className={`flex flex-grow justify-between rounded-full items-center px-2  ${
                  selected == "who"
                     ? "bg-white"
                     : "bg-none hover:bg-[#dddddd]"
               }`}
               onClick={() => setSelected("who")}
            >
               <div className="pl-4">
                  <h4 className="text-left text-[14px] font-medium">
                     Who
                  </h4>
                  <p
                     className={`text-sm ${
                        selected == "who"
                           ? "text-[#808080]"
                           : "text-[#222222]"
                     }`}
                  >
                     Add guests
                  </p>
               </div>
               <div className="flex bg-[#e41c5a] rounded-full h-[80%] items-center p-4">
                  <MagnifyingGlassIcon className="hidden md:inline-flex h-5 text-white cursor-pointer mx-auto font-extrabold mr-2" />
                  <h4 className="hidden md:inline text-white">
                     Search
                  </h4>
               </div>
            </button>
         </div>
      </header>
   );
}

export default HeaderSearch;
