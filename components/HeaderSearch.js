"use client";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import DatePopup from "./DatePopup";
import LocationPopup from "./LocationPopup";
import HeaderSearchTop from "./HeaderSearchTop";
import GuestsPopup from "./GuestsPopup";
import PopupBlocker from "./PopupBlocker";
import { useRouter } from "next/navigation";

function HeaderSearch({ selected, setSelected }) {
   const [searchInput, setSearchInput] = useState("");
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());
   const [totalGuests, setTotalGuests] = useState(0);
   const router = useRouter();

   const searchLocation = () => {
      router.push(
         `/search?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guests=${totalGuests}`
      );
   };

   return (
      <>
         <PopupBlocker setSelected={setSelected} />
         <header className="sticky top-0 z-50 grid sm:grid-cols-2 md:grid-cols-3 bg-white shadow-md p-5 md:px-10 ">
            <HeaderSearchTop setSelected={setSelected} />
            {/* Main */}
            <div
               className={`flex border-[1px] rounded-full box-border
               border-[#dedede] col-span-3 w-[70%] mt-3 m-auto h-16 relative ${
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
                     setSelected={setSelected}
                     totalGuests={totalGuests}
                     setTotalGuests={setTotalGuests}
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
                     className={`bg-transparent border-none outline-none text-sm ml-4 text-[#808080] pointer-events-auto w-[100%]	 ${
                        selected == "where" || selected == "search"
                           ? "placeholder-[#808080]"
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
                        selected == "check-in" || selected == "search"
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
                        selected == "check-out" ||
                        selected == "search"
                           ? "text-[#808080]"
                           : "text-[#222222]"
                     }`}
                  >
                     {/* Add dates */}
                     {endDate.toDateString().slice(4, 10)}
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
                           selected == "who" || selected == "search"
                              ? "text-[#808080]"
                              : "text-[#222222]"
                        }`}
                     >
                        {totalGuests === 0
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
