import React from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";

function RecommendedBadge() {
   return (
      <div className="flex justify-center items-center">
         <MilitaryTechRoundedIcon
            fontSize="large"
            sx={{ color: "#e51e53" }}
         />
         <p className="text-md text-[#e51e53]">Recommended</p>
         <button className="cursor-pointer group relative">
            <InformationCircleIcon className="h-4 ml-1 text-gray-400" />

            <div className="absolute top-4 left-0 shadow-xl bg-white rounded-md p-3 w-[180px] hidden group-hover:block">
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
