import React from "react";
import MobileClosed from "./MobileClosed";

function MobileGuests({ mobileSelect, setMobileSelect }) {
   return mobileSelect === "Who" ? (
      <div>MobileDates</div>
   ) : (
      <MobileClosed
         category={"Who"}
         description={"Add guests"}
         setMobileSelect={setMobileSelect}
      />
   );
}

export default MobileGuests;
