import React from "react";
import Checkbox from "./Checkbox";

function CheckboxPane({ title, data }) {
   return (
      <>
         <h2 className="text-md font-medium my-2">{title}</h2>
         <div className="grid grid-cols-2">
            {data.map((label) => (
               <Checkbox label={label} key={label} />
            ))}
         </div>
         <hr className="my-4" />
      </>
   );
}

export default CheckboxPane;
