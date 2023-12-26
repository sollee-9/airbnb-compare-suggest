"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import {
   SparklesIcon,
   ArrowUpTrayIcon,
   EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { comparePropertiesData } from "../../data/comparePropertiesData";
import ComparedPropertyCard from "./comparedComponents/ComparedPropertyCard";
import PrioritiesDropdown from "./recommend/PrioritiesDropdown";
import { useSearchParams } from "next/navigation";
import RecommendedBadge from "./recommend/RecommendedBadge";
import Summary from "./comparedSections/Summary";
import Transportations from "./comparedSections/Transportations";
import Features from "./comparedSections/Features";
import Amenities from "./comparedSections/Amenities";
import Security from "./comparedSections/Security";
import Accessibility from "./comparedSections/Accessibility";

function Compare() {
   const router = useRouter();
   const params = useSearchParams();

   const [dropdown, setDropdown] = useState(false);

   const recommended = params.get("recommended");

   const property1 = comparePropertiesData[0];
   const property2 = comparePropertiesData[1];

   const goToWisthlistLocation = () => {
      router.push("/wishlist?location=Paris");
   };

   useEffect(() => {
      if (dropdown) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "scroll";
      }
   }, [dropdown]);

   return (
      <div className="w-[100%] relative mb-8">
         {dropdown && (
            <>
               <div
                  className="hidden sm:flex fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.2)] z-[50] h-[100%] w-[100%]"
                  onClick={() => setDropdown(false)}
               ></div>
               <PrioritiesDropdown setDropdown={setDropdown} />
            </>
         )}
         {/* Header */}
         <section className="flex mt-6 justify-between w-[100%] px-11 mb-3">
            <div className="flex">
               <button onClick={() => goToWisthlistLocation()}>
                  <ArrowLeftIcon className="h-6 " />
               </button>
               <h1 className="text-xl font-medium my-2 ml-2">
                  Paris
               </h1>
            </div>
            <div className="flex items-baseline">
               <button
                  className="flex relative justify-center items-center border rounded-full h-10 px-2
                  border-[#dddddd] hover:border-[#222222] hover:bg-[#f2f2f2] ease-in-out duration-200"
                  onClick={() => setDropdown(!dropdown)}
               >
                  <SparklesIcon className="h-4 mr-2" />
                  <p className="text-sm">Set Priorities</p>
               </button>
               <button className="mx-4">
                  <ArrowUpTrayIcon className="h-5" />
               </button>
               <button>
                  <EllipsisHorizontalIcon className="h-5" />
               </button>
            </div>
         </section>

         {/* Main Section */}
         <section className="flex-col flex items-center">
            <div className="px-56">
               {/* Properties */}
               <div className="flex justify-between gap-x-10">
                  <ComparedPropertyCard
                     title={property1.title}
                     img={property1.img}
                  />

                  <ComparedPropertyCard
                     title={property2.title}
                     img={property2.img}
                  />
               </div>

               {/* Recommended Section */}
               {recommended && (
                  <div className="flex justify-between gap-x-10">
                     <div className="fle justify-center w-[350px] mt-2">
                        {recommended === "0" && <RecommendedBadge />}
                     </div>
                     <div className="flex justify-center w-[350px] mt-2">
                        {recommended === "1" && <RecommendedBadge />}
                     </div>
                  </div>
               )}

               <div>
                  <Summary
                     property1={property1}
                     property2={property2}
                  />
                  <Transportations
                     property1={property1}
                     property2={property2}
                  />
                  <Amenities
                     property1={property1}
                     property2={property2}
                  />
                  <Features
                     property1={property1}
                     property2={property2}
                  />
                  <Security
                     property1={property1}
                     property2={property2}
                  />
                  <Accessibility
                     property1={property1}
                     property2={property2}
                  />
               </div>
            </div>
         </section>
      </div>
   );
}

export default Compare;
