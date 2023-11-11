import React from "react";
// Redux
import { useDispatch } from "react-redux";
import { setSelection } from "../../app/GlobalRedux/Features/selection/selectionSlice";

function MobileClosed({ category, description }) {
   const dispatch = useDispatch();

   return (
      <button
         onClick={() =>
            dispatch(
               setSelection(
                  category === "When"
                     ? "check-in"
                     : category.toLowerCase()
               )
            )
         }
         className="flex sm:hidden h-[60px] w-[96%] bg-white rounded-[18px] shadow-md 
         justify-between px-6 items-center text-sm font-medium"
      >
         <p className="text-theme-gray">{category}</p>
         <p className="text-theme-black">{description}</p>
      </button>
   );
}

export default MobileClosed;
