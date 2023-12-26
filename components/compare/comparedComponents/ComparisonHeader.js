import React from "react";

function ComparisonHeader({ heading }) {
   return (
      <>
         <h1 className="text-lg font-medium mt-4">{heading}</h1>
         <hr className="my-2" />
      </>
   );
}

export default ComparisonHeader;
