import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

function WishlistRooms({
   img,
   title,
   description,
   star,
   beds,
   reviews,
   selected,
   selectLocation,
}) {
   const thisSelected = selected.includes(img);

   return (
      <div className="flex flex-col w-[100%] min-h-[300px] mb-4">
         <div
            className="relative w-[100%] aspect-square border-white border-4 shadow-md rounded-[17px] cursor-pointer"
            onClick={() => selectLocation(img, thisSelected)}
         >
            <Image
               src={img}
               alt={title}
               fill
               objectFit="cover"
               className={`rounded-xl  hover:opacity-100 ${
                  thisSelected ? "opacity-100" : "opacity-30"
               }`}
            />
         </div>
         <div className="flex justify-between items-start mt-2">
            <h2 className="flex flex-grow justify-between text-theme-black text-[14px] font-medium text-ellipsis overflow-hidden whitespace-nowrap">
               {title}
            </h2>
            <div className="flex">
               <StarIcon className="h-3 ml-3 mr-1" />
               <p className="text-theme-black text-[14px] font-light whitespace-nowrap">
                  {star}
                  {"  "}({reviews})
               </p>
            </div>
         </div>
         <p className="text-[#727272] text-[14px] font-light leading-5 text-ellipsis whitespace-nowrap overflow-hidden">
            {description}
         </p>
         <div className="flex">
            <p className="text-[#727272] text-[14px] font-light">
               {beds}
               {"  "}
               {beds === 1 ? `bed` : `beds`}
            </p>
         </div>
      </div>
   );
}

export default WishlistRooms;
