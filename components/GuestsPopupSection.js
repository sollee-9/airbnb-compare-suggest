import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

function GuestsPopupSection({
   category,
   description,
   descriptionLink,
}) {
   const [guestNum, setGuestNum] = useState(0);

   const decrement = () => {
      if (guestNum > 0) {
         setGuestNum(guestNum - 1);
      }
   };

   const increment = () => {
      setGuestNum(guestNum + 1);
   };

   return (
      <div className="flex space-y-12">
         <div className="flex-col flex-grow">
            <h4 className="font-medium text-[15px]">{category}</h4>
            <p
               className={`font-light text-sm text-[#777777] ${
                  descriptionLink
                     ? "font-medium underline cursor-pointer"
                     : ""
               }`}
            >
               {description}
            </p>
         </div>
         <div className="flex mt-0">
            <button
               onClick={() => decrement()}
               className="rounded-full border-[1px] h-8 w-8 flex justify-center items-center disabled:cursor-not-allowed
                disabled:text-[#ebebeb] disabled:border-[#ebebeb] text-[#717171] border-[#b0b0b0]
                hover:text-[#222222] hover:border-[#222222]"
               disabled={guestNum == 0}
            >
               <MinusIcon className="h-6" />
            </button>
            <p>{guestNum}</p>
            <button
               onClick={() => increment()}
               className="rounded-full border-[1px] h-8 w-8 flex justify-center items-center disabled:cursor-not-allowed
               disabled:text-[#ebebeb] disabled:border-[#ebebeb] text-[#717171] border-[#b0b0b0]
               hover:text-[#222222] hover:border-[#222222]"
            >
               <PlusIcon className="h-8" />
            </button>
         </div>
      </div>
   );
}

export default GuestsPopupSection;
