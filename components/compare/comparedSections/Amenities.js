import React from "react";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import ComparisonHeader from "../comparedComponents/ComparisonHeader";
import ComparisonRow from "../comparedComponents/ComparisonRow";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";

function Amenities({ property1, property2 }) {
   return (
      <>
         <ComparisonHeader heading={"Amenities"} />
         <div className="flex flex-col box-border px-5">
            <ComparisonRow
               property1={`${
                  property1.ac
                     ? "Air conditioning"
                     : "No air conditioning"
               }`}
               property2={`${
                  property2.ac
                     ? "Air conditioning"
                     : "No air conditioning"
               }`}
               icon={<AcUnitRoundedIcon className="icon-spacing" />}
            />
            <ComparisonRow
               property1={`${
                  property1.wifi ? "Wifi available" : "No Wifi"
               }`}
               property2={`${
                  property2.wifi ? "Wifi available" : "No Wifi"
               }`}
               icon={<WifiIcon className="icon-spacing" />}
            />
            <ComparisonRow
               property1={`${
                  property1.washer ? "Washer available" : "No washer"
               }`}
               property2={`${
                  property2.washer ? "Washer available" : "No washer"
               }`}
               icon={
                  <LocalLaundryServiceOutlinedIcon className="icon-spacing" />
               }
            />
         </div>
      </>
   );
}

export default Amenities;
