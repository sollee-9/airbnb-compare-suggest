"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import {
   SparklesIcon,
   ArrowUpTrayIcon,
   EllipsisHorizontalIcon,
   InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import TrainIcon from "@mui/icons-material/Train";
import { useRouter } from "next/navigation";
import { comparePropertiesData } from "../../data/comparePropertiesData";
import ComparedPropertyCard from "./ComparedPropertyCard";
import PrioritiesDropdown from "./PrioritiesDropdown";
import { useSearchParams } from "next/navigation";
import RecommendedBadge from "./RecommendedBadge";

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
      <div className="w-[100%] relative">
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
                  className="flex relative justify-center items-center border rounded-full h-10 px-2"
                  onClick={() => setDropdown(!dropdown)}
               >
                  <SparklesIcon className="h-4 mr-1" />
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

               {/* Summary */}
               <div>
                  <h1 className="text-lg font-medium mt-2">
                     Summary
                  </h1>
                  <hr className="my-2" />
                  <div className="flex flex-col">
                     <div className="flex gap-x-11">
                        <p className="comparison-p">
                           {property1.description}
                        </p>

                        <p className="comparison-p">
                           {property2.description}
                        </p>
                     </div>
                     <div className="flex gap-x-11">
                        <p className="comparison-p">
                           {`$${property1.price} USD/night`}
                        </p>

                        <p className="comparison-p">
                           {`$${property2.price} USD/night`}
                        </p>
                     </div>
                     <div className="flex gap-x-11">
                        <p className="comparison-p flex">
                           <StarIcon className="h-5" />
                           {property1.stars}
                        </p>

                        <p className="comparison-p flex">
                           <StarIcon className="h-5" />
                           {property2.stars}
                        </p>
                     </div>
                     <div className="flex gap-x-11">
                        <p className="comparison-p">
                           {property1.praise}
                        </p>

                        <p className="comparison-p">
                           {property2.praise}
                        </p>
                     </div>
                     <div className="flex gap-x-11">
                        <p className="comparison-p">
                           {property1.complaint}
                        </p>

                        <p className="comparison-p">
                           {property2.complaint}
                        </p>
                     </div>
                  </div>
                  <h1 className="text-lg font-medium mt-2">
                     Transportation
                  </h1>
                  <hr className="my-2" />
                  <div className="flex flex-col">
                     <div className="flex gap-x-11">
                        <p className="comparison-p flex">
                           <TrainIcon />
                           {`${property1.walkToStation}  min walk to nearest station`}
                        </p>

                        <p className="comparison-p flex">
                           {`${property2.walkToStation}  min walk to nearest station`}
                        </p>
                     </div>
                     <div className="flex gap-x-11">
                        <p className="comparison-p">
                           {`$${property1.price} USD/night`}
                        </p>

                        <p className="comparison-p">
                           {`$${property2.price} USD/night`}{" "}
                        </p>
                     </div>
                     <div className="flex gap-x-11">
                        <p className="comparison-p flex">
                           <StarIcon className="h-5" /> 4.91
                        </p>

                        <p className="comparison-p flex">
                           <StarIcon className="h-5" /> 4.8
                        </p>
                     </div>
                     <div className="flex gap-x-11">
                        <p className="comparison-p">
                           {property1.praise}
                        </p>

                        <p className="comparison-p">
                           {property2.praise}
                        </p>
                     </div>
                     <div className="flex gap-x-11">
                        <p className="comparison-p">
                           {property1.complaint}
                        </p>

                        <p className="comparison-p">
                           {property2.complaint}
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Compare;
