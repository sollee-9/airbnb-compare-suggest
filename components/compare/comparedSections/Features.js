import React from "react";
import ComparisonHeader from "../comparedComponents/ComparisonHeader";
import ComparisonRow from "../comparedComponents/ComparisonRow";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import EnergySavingsLeafOutlinedIcon from "@mui/icons-material/EnergySavingsLeafOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";

function Accessibility({ property1, property2 }) {
   return (
      <>
         <ComparisonHeader heading={"Features"} />
         <div className="comparison-row-wrapper ">
            <ComparisonRow
               property1={`${property1.pool ? "Pool" : "No pool"}`}
               property2={`${property2.pool ? "Pool" : "No pool"}`}
               icon={<PoolOutlinedIcon className="icon-spacing" />}
            />
            <ComparisonRow
               property1={`${
                  property1.gym ? "Gym available" : "No gym"
               }`}
               property2={`${
                  property2.gym ? "Gym available" : "No gym"
               }`}
               icon={
                  <FitnessCenterRoundedIcon className="icon-spacing" />
               }
            />
            <ComparisonRow
               property1={`${
                  property1.ev
                     ? "EV charging available"
                     : "No EV charging"
               }`}
               property2={`${
                  property2.ev
                     ? "EV charging available"
                     : "No EV charging"
               }`}
               icon={
                  <EnergySavingsLeafOutlinedIcon className="icon-spacing" />
               }
            />
            <ComparisonRow
               property1={`${
                  property1.breakfast
                     ? "Breakfast provided"
                     : "No breakfast"
               }`}
               property2={`${
                  property2.breakfast
                     ? "EV charging available"
                     : "No breakfast"
               }`}
               icon={
                  <LunchDiningOutlinedIcon className="icon-spacing" />
               }
            />
         </div>
      </>
   );
}

export default Accessibility;
