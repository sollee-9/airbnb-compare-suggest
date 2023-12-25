"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LocationInfoCard from "../compare/LocationInfoCard";
import { useSearchParams } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { HomeIcon } from "@heroicons/react/24/outline";
import WishListRooms from "../compare/WishlistRooms";
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
   const router = useRouter();
   const goToWisthlist = () => {
      router.push("/wishlist");
   };

   const goToCompare = () => {
      router.push("/compare");
   };

   const [selected, setSelected] = useState([]);

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
               <button className="border rounded-full px-3 py-1 text-sm mr-2">
                  Add dates
               </button>
               <button className="border rounded-full px-3 py-1 text-sm">
                  Guests
               </button>
            </div>
            {selected.length == 2 && (
               <button
                  className="flex border rounded-full px-3 py-1  text-sm justify-center content-center"
                  onClick={() => goToCompare()}
               >
                  <HomeIcon className="h-5" />
                  <p className="ml-1">Compare</p>
               </button>
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
                  />
               )
            )}
         </section>
      </>
   );
}

export default WishlistContent;
