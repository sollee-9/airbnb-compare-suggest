"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function LocationInfoCard({ img, location, numSaved }) {
   const router = useRouter();

   const goToWishlistCity = (location) => {
      router.push(`/wishlist?location=${location}`);
   };

   return (
      <div
         className="flex flex-col w-[100%] min-h-[300px] cursor-pointer"
         onClick={() => goToWishlistCity(location)}
      >
         <div className="relative w-[100%] aspect-square rounded-[16px] border-4 border-white shadow-lg">
            <Image
               src={img}
               alt={location}
               fill
               objectFit="cover"
               className="rounded-xl"
            />
         </div>
         <div className="flex justify-between items-start mt-2">
            <h2 className="text-theme-black text-[15px] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
               {location}
            </h2>
         </div>
         <p className="text-[#727272] text-[15px] font-light leading-5 my-1">
            {numSaved}
            {"  "}saved
         </p>
      </div>
   );
}

export default LocationInfoCard;
