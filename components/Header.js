"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
   MagnifyingGlassIcon,
   UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import HeaderSearch from "./HeaderSearch";
import MobileHeader from "./mobile/MobileHeader";
import MobileSearchPopup from "./mobile/MobileSearchPopup";

function Header({ fromSearch }) {
   const [selected, setSelected] = useState("");
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

   const formatDates = (date) => {
      return format(new Date(date), "MMM. d");
   };

   const displayDates = (start, end) => {
      let displayDate = "";

      // case 1: if end date not specified then let it be day after start date
      if (!end) {
         // let end = format(new Date(startDate) + 1, "MMM. d");
      }

      const formattedStart = formatDates(start);
      const formattedEnd = formatDates(end);

      // case 2: if start & end dates in same month, display month once
      if (formattedStart.slice(0, 3) === formattedEnd.slice(0, 3)) {
         displayDate = `${formattedStart} - ${format(
            new Date(end),
            "d"
         )}`;
      } else {
         displayDate = `${formattedStart} – ${formattedEnd}`;
      }
      return displayDate;
   };

   const goToHome = () => {
      router.push("/");
   };

   return (
      <>
         {selected === "" ? (
            <header className="hidden sm:flex sticky top-0 z-50 justify-between items-center bg-white shadow-sm p-5 md:px-10">
               {/* Laptop View */}
               <button
                  onClick={goToHome}
                  className="relative items-center h-10 cursor-pointer my-auto min-w-[150px]"
               >
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
               </button>

               <div
                  className="sm:h-[50px] sm:flex items-center border-[1px] shadow-md rounded-full py-2
               border-[#dedede] min-w-[370px] max-w-[450px] px-2 md:px-0"
               >
                  <button
                     className="text-[#242424] font-medium border-r-[1px] px-4 flex-grow text-sm 
                    text-ellipsis	whitespace-nowrap overflow-hidden"
                     onClick={() => setSelected("where")}
                  >
                     {location ? location : "Anywhere"}
                  </button>
                  <button
                     className="text-[#242424] font-medium border-r-[1px] px-4 flex-grow text-sm text-ellipsis	
                     whitespace-nowrap overflow-hidden"
                     onClick={() => setSelected("check-in")}
                  >
                     {fromSearch
                        ? `${displayDates(startDate, endDate)}`
                        : "Any Week"}
                  </button>
                  <button
                     onClick={() => setSelected("who")}
                     className={`pl-4 pr-1 flex-grow text-sm text-ellipsis whitespace-nowrap overflow-hidden
               ${
                  guests
                     ? `text-[#242424] font-medium`
                     : `text-[#7a7a7a]`
               }`}
                  >
                     {!guests
                        ? "Add guests"
                        : guests > 1
                        ? `${guests} guests`
                        : "1 guest"}
                  </button>
                  <MagnifyingGlassIcon
                     onClick={() => setSelected("search")}
                     className="inline-flex h-8 bg-[#ff395c] text-white rounded-full p-2 cursor-pointer 
                     mx-auto md:mx-2 font-extrabold"
                  />
               </div>

               <div className="flex items-center space-x-4 justify-end text-[##222222] text-sm">
                  <p className="hidden lg:inline cursor-pointer">
                     Airbnb your home
                  </p>
                  <GlobeAltIcon className="hidden md:flex h-6 cursor-pointer" />

                  <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                     <Bars3Icon className="h-6" />
                     <UserCircleIcon className="h-6" />
                  </div>
               </div>
            </header>
         ) : (
            <>
               <HeaderSearch
                  selected={selected}
                  setSelected={setSelected}
                  fromSearch={fromSearch}
               />
               <MobileSearchPopup
                  location={location}
                  dates={displayDates(startDate, endDate)}
                  guests={guests}
                  fromSearch={fromSearch}
                  setSelected={setSelected}
               />
            </>
         )}

         <MobileHeader
            location={location}
            dates={displayDates(startDate, endDate)}
            guests={guests}
            fromSearch={fromSearch}
            setSelected={setSelected}
         />
      </>
   );
}

export default Header;
