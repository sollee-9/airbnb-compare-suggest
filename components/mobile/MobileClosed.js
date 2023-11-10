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
         className="flex sm:hidden h-[60px] w-[96%] bg-white rounded-[20px] shadow-lg justify-between py-6 border border-gray-200 z-50"
      >
         <p>{category}</p>
         <p>{description}</p>
      </button>
   );
}

export default MobileClosed;
