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
import HeaderSearch from "./HeaderSearch";
import MobileSearchPopup from "./mobile/MobileSearchPopup";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import OptionsHeader from "./OptionsHeader";

function HeaderNew({ fromSearch }) {
   const [selected, setSelected] = useState("");
   const [mobileSearch, setMobileSearch] = useState(false);
   const router = useRouter();

   const params = useSearchParams();

   const location = params.get("location");
   const startDate = params.get("startDate");
   const endDate = params.get("endDate");
   const guests = params.get("guests");
   // const numAdults = params.get("numAdults");
   // const numChildren = params.get("numChildren");
   // const numInfants = params.get("numInfants");
   // const numPets = params.get("numPets");

   // const guests =
   //    parseInt(numAdults) +
   //    parseInt(numChildren) +
   //    parseInt(numInfants) +
   //    parseInt(numPets);

   const formattedStartDate = format(new Date(startDate), "MMM. d");
   const formattedEndDate = format(new Date(endDate), "MMM. d");

   const goToHome = () => {
      router.push("/");
   };

   return selected === "" ? (
      <div className="sticky top-0 z-50">
         <header className="sticky top-0 z-50 flex justify-between items-center bg-white shadow-sm p-5 md:px-10">
            {/* Laptop View */}
            <button
               onClick={goToHome}
               className="hidden sm:flex relative items-center h-10 cursor-pointer my-auto min-w-[150px]"
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

            <div className="hidden sm:h-[50px] sm:flex items-center border-[1px] shadow-md rounded-full py-2 border-[#dedede] min-w-[350px] md:w-[390px] px-2 md:px-0">
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
                     ? `${formattedStartDate}-${formattedEndDate}`
                     : "Any Week"}
               </button>
               <button
                  onClick={() => setSelected("who")}
                  className={`px-4 flex-grow text-sm text-ellipsis whitespace-nowrap overflow-hidden
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
                  className="inline-flex h-8 bg-[#ff395c] text-white rounded-full p-2 cursor-pointer mx-auto md:mx-2 font-extrabold"
               />
            </div>

            <div className="hidden sm:flex items-center space-x-4 justify-end text-[##222222] text-sm">
               <p className="hidden lg:inline cursor-pointer">
                  Airbnb your home
               </p>
               <GlobeAltIcon className="hidden md:flex h-6 cursor-pointer" />

               <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                  <Bars3Icon className="h-6" />
                  <UserCircleIcon className="h-6" />
               </div>
            </div>

            {/* Mobile View */}
            <div
               className="flex sm:hidden items-center border-[1px] shadow-md rounded-full 
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
               className="flex sm:hidden relative border border-gray-400 rounded-full 
            justify-center items-center h-9 w-9 text-center ml-2"
            >
               <AdjustmentsHorizontalIcon className="h-6 w-6 justify-center items-center" />
            </div>
            {mobileSearch ? (
               <MobileSearchPopup setMobileSearch={setMobileSearch} />
            ) : null}
         </header>
         {fromSearch && <OptionsHeader />}
      </div>
   ) : (
      <HeaderSearch
         selected={selected}
         setSelected={setSelected}
         fromSearch={fromSearch}
      />
   );
}

export default HeaderNew;
