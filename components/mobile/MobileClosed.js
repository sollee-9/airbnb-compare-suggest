import React from "react";

function MobileClosed({ category, description, setSelected }) {
   return (
      <button
         onClick={() => setSelected(category.toLowerCase())}
         className="flex sm:hidden h-[60px] w-[96%] bg-white rounded-[20px] shadow-lg justify-between py-6 border border-gray-200 z-50"
      >
         <p>{category}</p>
         <p>{description}</p>
      </button>
   );
}

export default MobileClosed;
