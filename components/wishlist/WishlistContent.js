"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LocationInfoCard from "../compare/comparedComponents/LocationInfoCard";
import { useSearchParams } from "next/navigation";
import {
   ArrowLeftIcon,
   ArrowUturnLeftIcon,
} from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import WishListRooms from "./WishlistRooms";
// Data
import { wishlistDestinationsData } from "../../data/wishlistDestinationsData";
import { wishtlistParisLocations } from "../../data/wishlistParisLocations";

function WishlistContent() {
   const params = useSearchParams();
   const location = params.get("location");

   return (
      <main className="flex">
         <div className="w-[100%] mx-11 mb-10">
            {/* Wishlist Destinations Results */}
            {location === null ? (
               <WishlistDestinations />
            ) : (
               <Location location={location} />
            )}
         </div>
      </main>
   );
}

function WishlistDestinations() {
   return (
      <>
         <h1 className="text-xl font-medium my-6">Wishlists</h1>
         <section className=" grid grid-cols-2 lg:grid-cols-4 w-[100%] gap-8 gap-x-6">
            {wishlistDestinationsData?.map(
               ({ img, location, numSaved }) => (
                  <LocationInfoCard
                     key={img}
                     img={img}
                     location={location}
                     numSaved={numSaved}
                  />
               )
            )}
         </section>
      </>
   );
}

function Location({ location }) {
   const [compare, setCompare] = useState(false);
   const [selected, setSelected] = useState([]);

   const router = useRouter();
   const goToWisthlist = () => {
      router.push("/wishlist");
   };

   const goToCompare = () => {
      router.push("/compare");
   };

   const selectLocation = (img, thisSelected) => {
      if (thisSelected) {
         setSelected(selected.filter((item) => item !== img));
         return;
      }

      if (selected?.length >= 2) {
         selected.pop();
      }
      setSelected([img, ...selected]);
   };

   return (
      <>
         <button onClick={goToWisthlist}>
            <ArrowLeftIcon className="h-6 mt-6" />
         </button>
         <h1 className="text-xl font-medium my-2">{location}</h1>

         <section className="flex justify-between my-2">
            <div>
               <button className="border rounded-full px-3 py-1 text-sm mr-2 border-[#dddddd] hover:border-[#222222]">
                  Add dates
               </button>
               <button className="border rounded-full px-3 py-1 text-sm border-[#dddddd] hover:border-[#222222]">
                  Guests
               </button>
            </div>
            {!compare && (
               <button
                  className="flex border rounded-full px-3 py-1 text-sm justify-end items-center border-[#dddddd] hover:border-[#222222]"
                  onClick={() => setCompare(true)}
               >
                  <HomeIcon className="h-5" />
                  <p className="ml-1">Compare Properties</p>
               </button>
            )}

            {compare && (
               <div className="flex items-center">
                  {selected.length == 2 && (
                     <button
                        className="flex border rounded-lg px-3 py-1 text-white text-sm justify-center content-center 
                        bg-[#fd5a5d] hover:scale-105 mr-2 h-8 ease-in-out duration-200 hover:shadow-md"
                        onClick={() => goToCompare()}
                     >
                        <HomeIcon className="h-5" />
                        <p className="ml-1">Compare</p>
                     </button>
                  )}
                  <button
                     onClick={() => {
                        setCompare(false);
                        setSelected([]);
                     }}
                     className="flex"
                  >
                     <ArrowUturnLeftIcon className="h-5 mr-2" />
                     Back
                  </button>
               </div>
            )}
         </section>
         <section className="grid grid-cols-4 gap-x-6">
            {wishtlistParisLocations?.map(
               ({ img, title, description, beds, star, reviews }) => (
                  <WishListRooms
                     key={img}
                     img={img}
                     title={title}
                     description={description}
                     star={star}
                     beds={beds}
                     reviews={reviews}
                     selected={selected}
                     selectLocation={selectLocation}
                     compare={compare}
                  />
               )
            )}
         </section>
      </>
   );
}

export default WishlistContent;
