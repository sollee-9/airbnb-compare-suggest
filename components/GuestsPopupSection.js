import React from "react";

function GuestsPopupSection({
   category,
   description,
   descriptionLink,
}) {
   return (
      <div className="flex space-y-12">
         <div className="flex-col flex-grow">
            <h4 className="font-medium text-[15px]">{category}</h4>
            <p
               className={`font-light text-sm text-[#777777] ${
                  descriptionLink
                     ? "font-medium underline cursor-pointer "
                     : ""
               }`}
            >
               {description}
            </p>
         </div>
         <div className="">counter</div>
      </div>
   );
}

export default GuestsPopupSection;
