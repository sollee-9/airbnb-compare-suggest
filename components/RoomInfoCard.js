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
      <div className="flex flex-col justify-center w-[100%] min-h-[300px]">
         <div className="relative flex-grow w-[100%] aspect-square">
            <Image
               src={img}
               alt={title}
               fill
               objectFit="cover"
               className="rounded-md"
            />
            <HeartIcon
               onClick={() => setHearted(!hearted)}
               className={`cursor-pointer absolute h-6 right-6 top-6 ${
                  hearted
                     ? "text-[#ff395c]"
                     : "text-[rgba(0,0,0,0.5)]"
               }`}
            />
         </div>
         <div className="flex justify-between">
            <h2 className="text-[#222222] text-[15px] font-medium">
               {location}
            </h2>
            <div className="flex items-center">
               <StarIcon className="h-4 mr-2" />
               <p className="text-[#222222]">{star}</p>
            </div>
         </div>
         <p className="text-[#727272] text-[15px]">{title}</p>
         <div className="flex">
            <p className="text-[#222222] font-semibold text-[15px]">{`${
               price.split(" ")[0]
            }`}</p>
            &nbsp;
            <p className="text-[#222222] text-[15px]"> night ·</p>
            &nbsp;
            <p className="text-[#727272] underline text-[15px]">
               {total}
            </p>
         </div>
      </div>
   );
}

export default RoomInfoCard;
