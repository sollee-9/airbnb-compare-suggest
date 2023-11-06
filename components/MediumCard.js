import React from "react";
import Image from "next/image";

function MediumCard({ title, img }) {
   return (
      <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
         <div className="relative h-80 w-80">
            <Image
               src={img}
               fill
               alt={title}
               className="rounded-xl"
            />
         </div>

         <h2>{title}</h2>
      </div>
   );
}

export default MediumCard;
