import React from "react";

function ComparisonRow({ property1, property2, icon = null }) {
   return (
      <div className="flex gap-x-11 mb-1">
         <p className="comparison-p flex items-center pl-6">
            {icon}
            {property1}
         </p>
         <p className="comparison-p flex pl-4">{property2}</p>
      </div>
   );
}

export default ComparisonRow;
