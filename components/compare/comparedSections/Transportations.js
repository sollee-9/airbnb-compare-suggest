import React from "react";
import ComparisonHeader from "../comparedComponents/ComparisonHeader";
import ComparisonRow from "../comparedComponents/ComparisonRow";
import LocalAirportRoundedIcon from "@mui/icons-material/LocalAirportRounded";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";

function Transportations({ property1, property2 }) {
   return (
      <>
         <ComparisonHeader heading={"Transportation"} />
         <div className="flex flex-col box-border px-5">
            <ComparisonRow
               property1={`${property1.walkToStation}  min walk to nearest station`}
               property2={`${property2.walkToStation}  min walk to nearest station`}
               icon={<TrainIcon className="icon-spacing" />}
            />
            <ComparisonRow
               property1={`${property1.driveToAirport}  min drive from nearest airport`}
               property2={`${property2.driveToAirport}  min drive from nearest airport`}
               icon={
                  <LocalAirportRoundedIcon className="icon-spacing" />
               }
            />
            <ComparisonRow
               property1={`${property1.walkToAttraction}  min walk to ${property1.nearestAttraction}`}
               property2={`${property2.walkToAttraction}  min walk to ${property2.nearestAttraction}`}
               icon={
                  <DirectionsWalkRoundedIcon className="icon-spacing" />
               }
            />
         </div>
      </>
   );
}

export default Transportations;
