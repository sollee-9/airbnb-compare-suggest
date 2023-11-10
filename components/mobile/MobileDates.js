import React from "react";
import MobileClosed from "./MobileClosed";

function MobileDates({ selected, setSelected }) {
   return selected === "When" ? (
      <div>MobileDates</div>
   ) : (
      <MobileClosed
         category={"When"}
         description={"Add dates"}
         setSelected={setSelected}
      />
   );
}

export default MobileDates;
