import React from "react";
import ComparisonHeader from "../comparedComponents/ComparisonHeader";
import ComparisonRow from "../comparedComponents/ComparisonRow";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";

function Security({ property1, property2 }) {
   return (
      <>
         <ComparisonHeader heading={"Security"} />
         <div className="comparison-row-wrapper ">
            <ComparisonRow
               property1={`${
                  property1.smokeAlarm
                     ? "Smoke alarm installed"
                     : "No smoke alarm"
               }`}
               property2={`${
                  property2.smokeAlarm
                     ? "Smoke alarm installed"
                     : "No smoke alarm"
               }`}
               icon={
                  <LocalFireDepartmentOutlinedIcon className="icon-spacing" />
               }
            />
            <ComparisonRow
               property1={`${
                  property1.cctv
                     ? "CCTV on premises"
                     : "No CCTV present"
               }`}
               property2={`${
                  property2.cctv
                     ? "CCTV on premises"
                     : "No CCTV present"
               }`}
               icon={
                  <VideocamOutlinedIcon className="icon-spacing" />
               }
            />
         </div>
      </>
   );
}

export default Security;
