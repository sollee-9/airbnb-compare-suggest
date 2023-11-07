import React from "react";
import MobileClosed from "./MobileClosed";

function MobileDates({ mobileSelect, setMobileSelect }) {
   return mobileSelect === "When" ? (
      <div>MobileDates</div>
   ) : (
      <MobileClosed
         category={"When"}
         description={"Add dates"}
         setMobileSelect={setMobileSelect}
      />
   );
}

export default MobileDates;
