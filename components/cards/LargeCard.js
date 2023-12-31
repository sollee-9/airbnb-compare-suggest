import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
   return (
      <div className="relative h-96 min-w-[300px]">
         <Image
            alt={title}
            src={img}
            fill
            className="rounded-2xl object-cover"
         />
         <div className="absolute top-32 left-12">
            <h3 className="text-4xl mb-3 w-64 text-white">{title}</h3>
            <p className=" text-white">{description}</p>
            <button
               className="text-sm text-white bg-gray-900 px-4 py-2 
               rounded-lg mt-5"
            >
               {buttonText}
            </button>
         </div>
      </div>
   );
}

export default LargeCard;
