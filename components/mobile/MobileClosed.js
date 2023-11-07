import React from "react";

function MobileClosed({ category, description, setMobileSelect }) {
   return (
      <button
         onClick={() => setMobileSelect(category)}
         className="flex h-[60px] w-[96%] bg-white rounded-[20px] shadow-lg justify-between py-6 border border-gray-200 z-50"
      >
         <p>{category}</p>
         <p>{description}</p>
      </button>
   );
}

export default MobileClosed;
