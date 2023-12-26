import React from "react";
import ComparisonHeader from "../comparedComponents/ComparisonHeader";
import ComparisonRow from "../comparedComponents/ComparisonRow";
import WifiIcon from "@mui/icons-material/Wifi";
import LocalLaundryServiceOutlinedIcon from "@mui/icons-material/LocalLaundryServiceOutlined";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";
import HvacOutlinedIcon from "@mui/icons-material/HvacOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";

function Amenities({ property1, property2 }) {
   return (
      <>
         <ComparisonHeader heading={"Amenities"} />
         <div className="comparison-row-wrapper ">
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
                  property1.tv ? "TV available" : "No TV"
               }`}
               property2={`${
                  property2.tv ? "TV available" : "No TV"
               }`}
               icon={<LiveTvOutlinedIcon className="icon-spacing" />}
            />
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
                  property1.heating
                     ? "Heating available"
                     : "No heating"
               }`}
               property2={`${
                  property2.heating
                     ? "Heating available"
                     : "No heating"
               }`}
               icon={<HvacOutlinedIcon className="icon-spacing" />}
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
