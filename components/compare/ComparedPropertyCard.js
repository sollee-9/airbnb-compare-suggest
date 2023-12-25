"use client";
import React from "react";
import Image from "next/image";

function ComparedPropertyCard({ title, img }) {
   return (
      <div>
         <p className="text-[15px] font-medium mb-1">{title}</p>
         <div className="w-[350px] h-[230px] relative rounded-xl shadow-md">
            <Image
               src={img}
               alt={title}
               className="w-full h-full object-cover relative rounded-xl"
               fill={true}
            />
         </div>
      </div>
   );
}

export default ComparedPropertyCard;
