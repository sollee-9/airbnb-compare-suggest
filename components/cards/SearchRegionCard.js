import React from "react";
import Image from "next/image";

function SearchRegionCard({ img, alt, text }) {
   return (
      <div>
         <Image
            src={img}
            width={200}
            height={200}
            className="border-gray-200 border rounded-xl hover:border-gray-500"
            alt={alt}
         />
         <h4 className="text-sm font-light mt-2">{text}</h4>
      </div>
   );
}

export default SearchRegionCard;
