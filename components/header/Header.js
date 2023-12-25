"use client";
import React from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import HeaderSearch from "./HeaderSearch";
import MobileHeader from "../mobile/MobileHeader";
import HeaderAccount from "./HeaderAccount";
import HeaderSearchFields from "./HeaderSearchFields";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
   setSelection,
   getSelection,
} from "../../app/GlobalRedux/Features/selection/selectionSlice";
// Helpers
import { formatDateRange } from "../../helpers/datesHelper";

function Header({ searchFields = true }) {
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

   const goToHome = () => {
      router.push("/");
   };

   return (
      <>
         {selection == "" ? (
            // Non-Search Header
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

               {searchFields && <HeaderSearchFields />}

               <HeaderAccount />
            </header>
         ) : (
            // Open Search on selection == "search" (Laptop or Mobile)
            <HeaderSearch />
         )}

         {/* Display Mobile Header on mobile view */}
         {searchFields && (
            <MobileHeader
               location={location}
               dates={dateRange}
               guests={guests}
            />
         )}
      </>
   );
}

export default Header;
