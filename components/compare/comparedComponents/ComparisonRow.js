import React from "react";

function ComparisonRow({ property1, property2, icon = null }) {
   return (
      <div className="flex gap-x-11">
         <p className="comparison-p flex">
            {icon}
            {property1}
         </p>
         <p className="comparison-p flex">{property2}</p>
      </div>
   );
}

export default ComparisonRow;
