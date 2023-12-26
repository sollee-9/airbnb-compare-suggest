import React from "react";
import ComparisonHeader from "../comparedComponents/ComparisonHeader";
import ComparisonRow from "../comparedComponents/ComparisonRow";
import { StarIcon } from "@heroicons/react/24/solid";

function Summary({ property1, property2 }) {
   return (
      <>
         <ComparisonHeader heading={"Summary"} />
         <div className="flex flex-col box-border px-5">
            <ComparisonRow
               property1={property1.description}
               property2={property2.description}
            />
            <ComparisonRow
               property1={`$${property1.price} USD/night`}
               property2={`$${property2.price} USD/night`}
            />
            <ComparisonRow
               property1={
                  <>
                     <StarIcon className="h-5 mr-1" />
                     {property1.stars}
                  </>
               }
               property2={
                  <>
                     <StarIcon className="h-5 mr-1" />
                     {property2.stars}
                  </>
               }
            />
            <ComparisonRow
               property1={property1.praise}
               property2={property2.praise}
            />
            <ComparisonRow
               property1={property1.complaint}
               property2={property2.complaint}
            />
         </div>
      </>
   );
}

export default Summary;
