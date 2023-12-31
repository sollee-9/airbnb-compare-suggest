import React from "react";

function OptionIcon({ text, icon, iconSelected, setIconSelected }) {
   const selected = text === iconSelected;
   return (
      <div className="w-[95px] flex justify-center mx-3">
         <button
            className={`hover:border-b-2 ${
               selected
                  ? "border-b-2 border-black"
                  : "hover:border-[#dddddd]"
            }`}
            onClick={() => setIconSelected(text)}
         >
            <div
               className={`icon-button ${
                  selected ? "text-black" : "text-[#727272]"
               }`}
            >
               {icon}
               <p className="text-[11px] mt-1 whitespace-nowrap">
                  {text}
               </p>
            </div>
         </button>
      </div>
   );
}

export default OptionIcon;
