import React from "react";
import ComparisonHeader from "../comparedComponents/ComparisonHeader";
import ComparisonRow from "../comparedComponents/ComparisonRow";
import DoorSlidingOutlinedIcon from "@mui/icons-material/DoorSlidingOutlined";
import StairsOutlinedIcon from "@mui/icons-material/StairsOutlined";
import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";

function Accessibility({ property1, property2 }) {
   return (
      <>
         <ComparisonHeader heading={"Accessibility"} />
         <div className="comparison-row-wrapper ">
            <ComparisonRow
               property1={`${
                  property1.ac ? "Elevator available" : "No elevator"
               }`}
               property2={`${
                  property2.ac ? "Elevator available" : "No elevator"
               }`}
               icon={
                  <DoorSlidingOutlinedIcon className="icon-spacing" />
               }
            />
            <ComparisonRow
               property1={`${
                  property1.steps
                     ? "Steps at entrance"
                     : "Step-free entrance"
               }`}
               property2={`${
                  property2.steps
                     ? "Steps at entrance"
                     : "Step-free entrance"
               }`}
               icon={<StairsOutlinedIcon className="icon-spacing" />}
            />
            <ComparisonRow
               property1={`${
                  property1.wheelchairFriendly
                     ? "Wheelchair-friendly"
                     : "Not wheelchair-friendly"
               }`}
               property2={`${
                  property2.wheelchairFriendly
                     ? "Wheelchair-friendly"
                     : "Not wheelchair-friendly"
               }`}
               icon={
                  <AccessibleOutlinedIcon className="icon-spacing" />
               }
            />
            <ComparisonRow
               property1={`${
                  property1.accessibleParking
                     ? "Accessible parking available"
                     : "No accessible parking"
               }`}
               property2={`${
                  property2.accessibleParking
                     ? "Accessible parking available"
                     : "No accessible parking"
               }`}
               icon={
                  <LocalParkingOutlinedIcon className="icon-spacing" />
               }
            />
         </div>
      </>
   );
}

export default Accessibility;
