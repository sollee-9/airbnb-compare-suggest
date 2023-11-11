"use client";
import React, { useState } from "react";
import Image from "next/image";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

function RoomInfoCard({
   img,
   location,
   title,
   description,
   star,
   price,
   total,
   long,
   lat,
}) {
   const [hearted, setHearted] = useState(false);
   return (
      <div className="flex flex-col w-[100%] min-h-[300px]">
         <div className="relative w-[100%] aspect-square">
            <Image
               src={img}
               alt={title}
               fill
               objectFit="cover"
               className="rounded-xl"
            />
            <HeartIcon
               onClick={() => setHearted(!hearted)}
               className={`cursor-pointer absolute h-6 right-4 top-4 ${
                  hearted
                     ? "text-[#ff395c]"
                     : "text-[rgba(0,0,0,0.5)]"
               }`}
            />
         </div>
         <div className="flex justify-between items-start mt-2">
            <h2 className="text-theme-black text-[15px] font-medium text-ellipsis whitespace-nowrap overflow-hidden">
               {location}
            </h2>
            <div className="flex items-center">
               <StarIcon className="h-3 ml-3 mr-1" />
               <p className="text-theme-black text-[15px] font-light">
                  {star}
               </p>
            </div>
         </div>
         <p className="text-[#727272] text-[15px] font-light leading-5 my-1">
            {title}
         </p>
         <div className="flex">
            <p className="text-theme-black font-medium text-[15px]">{`${
               price.split(" ")[0]
            }`}</p>
            &nbsp;
            <p className="text-theme-black text-[15px] font-light">
               {" "}
               night ·
            </p>
            &nbsp;
            <p className="text-[#727272] underline text-[15px] font-light">
               {total}
            </p>
         </div>
      </div>
   );
}

export default RoomInfoCard;
