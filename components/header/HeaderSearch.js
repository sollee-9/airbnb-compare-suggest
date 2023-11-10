"use client";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { format } from "date-fns";
import HeaderSearchTop from "./HeaderSearchTop";
import PopupBlocker from "../popups/PopupBlocker";
import LocationPopup from "../popups/LocationPopup";
import DatePopup from "../popups/DatePopup";
import GuestsPopup from "../popups/GuestsPopup";

function HeaderSearch({ selected, setSelected }) {
   const router = useRouter();
   const params = useSearchParams();

   // Params from URL
   const [location, setLocation] = useState(params.get("location"));
   const [startDate, setStartDate] = useState(
      params.get("startDate")
         ? new Date(params.get("startDate"))
         : null
   );
   const [endDate, setEndDate] = useState(
      params.get("endDate") ? new Date(params.get("endDate")) : null
   );
   const [numAdults, setNumAdults] = useState(
      params.get("numAdults") ? parseInt(params.get("numAdults")) : 0
   );
   const [numChildren, setNumChildren] = useState(
      params.get("numChildren")
         ? parseInt(params.get("numChildren"))
         : 0
   );
   const [numInfants, setNumInfants] = useState(
      params.get("numInfants")
         ? parseInt(params.get("numInfants"))
         : 0
   );
   const [numPets, setNumPets] = useState(
      params.get("numPets") ? parseInt(params.get("numPets")) : 0
   );
   // End of Params

   // Prepare & Format data for use
   const [searchInput, setSearchInput] = useState(
      location ? location : ""
   );
   const formattedStartDate = format(new Date(startDate), "MMM. d");
   const formattedEndDate = format(new Date(endDate), "MMM. d");
   const [totalGuests, setTotalGuests] = useState(0);

   useEffect(() => {
      setTotalGuests(
         parseInt(numAdults) +
            parseInt(numChildren) +
            parseInt(numInfants) +
            parseInt(numPets)
      );
   }, [numAdults, numChildren, numInfants, numPets]);

   //
   const searchLocation = () => {
      router.push(
         `/search?location=${searchInput}&startDate=${startDate}&endDate=${endDate}&numAdults=${numAdults}&numChildren=${numChildren}&numInfants=${numInfants}&numPets=${numPets}`
      );
      setSelected("");
   };

   return (
      <>
         <PopupBlocker setSelected={setSelected} />
         <header className="hidden sticky top-0 z-50 sm:grid sm:grid-cols-2 md:grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
            <HeaderSearchTop setSelected={setSelected} />
            {/* Main */}
            <div
               className={`flex border-[1px] rounded-full box-border
               border-[#dedede] col-span-3 w-[60%] mt-3 m-auto h-16 relative ${
                  selected === "search" ? "bg-white" : "bg-[#ebebeb]"
               }`}
            >
               {/* Popups */}
               {selected === "where" ? (
                  <LocationPopup setSelected={setSelected} />
               ) : null}
               {selected === "check-in" ||
               selected === "check-out" ? (
                  <DatePopup
                     startDate={startDate}
                     endDate={endDate}
                     setStartDate={setStartDate}
                     setEndDate={setEndDate}
                     setSelected={setSelected}
                  />
               ) : null}
               {selected === "who" ? (
                  <GuestsPopup
                     numAdults={numAdults}
                     setNumAdults={setNumAdults}
                     numChildren={numChildren}
                     setNumChildren={setNumChildren}
                     numInfants={numInfants}
                     setNumInfants={setNumInfants}
                     numPets={numPets}
                     setNumPets={setNumPets}
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
                     value={searchInput}
                     onChange={(e) => setSearchInput(e.target.value)}
                     autoFocus={true}
                     placeholder="Search destinations"
                     className={`bg-transparent border-none outline-none text-sm ml-4 text-[#222222] pointer-events-auto w-[100%] ${
                        searchInput
                           ? "font-medium"
                           : selected == "where" ||
                             selected == "search"
                           ? "placeholder-[#808080] font-normal"
                           : "placeholder-[#222222] disabled"
                     }
                     `}
                  />
               </button>
               <button
                  className={`flex-col items-center rounded-full min-w-[130px] p-2 ${
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
                        startDate
                           ? "font-medium text-[#222222]"
                           : selected == "check-in" ||
                             selected == "search"
                           ? "text-[#808080]"
                           : "text-[#222222]"
                     }`}
                  >
                     {startDate ? formattedStartDate : "Add dates"}
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
                        endDate
                           ? "font-medium text-[#222222]"
                           : selected == "check-out" ||
                             selected == "search"
                           ? "text-[#808080]"
                           : "text-[#222222]"
                     }`}
                  >
                     {endDate ? formattedEndDate : "Add dates"}
                  </p>
               </button>

               <div
                  className={`flex flex-grow justify-between rounded-full items-center px-2  ${
                     selected == "who"
                        ? "bg-white"
                        : "bg-none hover:bg-[#dddddd]"
                  }`}
               >
                  <button
                     className="pl-4 flex-grow"
                     onClick={() => setSelected("who")}
                  >
                     <h4 className="text-left text-[14px] font-medium">
                        Who
                     </h4>
                     <p
                        className={`text-sm text-left w-[80px] ${
                           totalGuests > 0
                              ? "font-medium text-[#222222]"
                              : selected == "who" ||
                                selected == "search"
                              ? "text-[#808080] font-normal"
                              : "text-[#222222]"
                        }`}
                     >
                        {totalGuests === null || totalGuests === 0
                           ? "Add guests"
                           : totalGuests > 1
                           ? `${totalGuests} guests`
                           : "1 guest"}
                     </p>
                  </button>
                  <button
                     className="flex bg-[#e41c5a] rounded-full h-[80%] items-center p-4"
                     onClick={searchLocation}
                  >
                     <MagnifyingGlassIcon className="hidden md:inline-flex h-5 text-white cursor-pointer mx-auto font-extrabold mr-2" />
                     <h4 className="hidden md:inline text-white">
                        Search
                     </h4>
                  </button>
               </div>
            </div>
         </header>
      </>
   );
}

export default HeaderSearch;
