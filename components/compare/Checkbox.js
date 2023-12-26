import React from "react";
import Checkbox from "@mui/material/Checkbox";

function CheckboxCustom({ label }) {
   return (
      <div className="flex items-center">
         <Checkbox
            disableRipple
            className="hover:bg-transparent"
            sx={{
               color: "#b0b0b0",
               "&.Mui-checked": {
                  color: "#222222",
               },
            }}
            style={{
               transform: "scale(1.2)",
            }}
         />
         <p className="font-light">{label}</p>
      </div>
   );
}

export default CheckboxCustom;
