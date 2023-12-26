import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";

function RecommendedBadge() {
   return (
      <div className="flex justify-center items-center mb-2">
         <MilitaryTechRoundedIcon
            fontSize="large"
            sx={{ color: "#fd5a5d" }}
         />
         <p className="text-md text-[#fd5a5d]">Recommended</p>
         <button className="cursor-pointer group relative">
            <InformationCircleIcon className="h-4 ml-1 text-gray-400" />

            <div className="absolute top-4 left-0 shadow-xl bg-white rounded-sm p-2 w-[180px] hidden group-hover:block">
               <p className="text-xs text-left">
                  This property was recommended based on the priority
                  settings you selected
               </p>
            </div>
         </button>
      </div>
   );
}

export default RecommendedBadge;
