"use client";
import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import {
   SparklesIcon,
   ArrowUpTrayIcon,
   EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ComparedPropertyCard from "./ComparedPropertyCard";

function Compare() {
   const router = useRouter();

   const goToWisthlistLocation = () => {
      router.push("/wishlist?location=Paris");
   };

   return (
      <div className="w-[100%]">
         {/* Header */}
         <section className="flex mt-6 justify-between w-[100%] px-11">
            <div className="flex">
               <button onClick={() => goToWisthlistLocation()}>
                  <ArrowLeftIcon className="h-6 " />
               </button>
               <h1 className="text-xl font-medium my-2 ml-2">
                  Paris
               </h1>
            </div>
            <div className="flex items-baseline">
               <button className="flex relative justify-center items-center border rounded-full h-10 px-2">
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
                     title="Apartment in Place Vendôme"
                     img="https://a0.muscache.com/im/pictures/miso/Hosting-16729935/original/52d7887e-6766-42a6-b914-eae6e8d6d850.jpeg?im_w=960"
                  />
                  <ComparedPropertyCard
                     title="Loft in Folie-Méricourt"
                     img="https://a0.muscache.com/im/pictures/miso/Hosting-43787426/original/506275db-579c-4b3c-95b1-24d3cc6d8327.jpeg?im_w=960"
                  />
               </div>
               {/* Summary */}

               <div>
                  <h1 className="text-lg font-medium mt-2">
                     Summary
                  </h1>
                  <hr className="my-2" />
                  <div className="flex flex-col">
                     <div className="flex gap-x-11">
                        <p className="text-sm break-words w-[350px]">
                           Luxurious & spacious suite at the foot of
                           Place Vendôme
                        </p>

                        <p className="text-sm max-width-[350px]">
                           Apartment with patio overlookking Eiffel
                           Tower
                        </p>
                     </div>
                     <div className="flex gap-x-11">
                        <p className="text-sm break-words w-[350px]">
                           $554 USD night
                        </p>

                        <p className="text-sm max-width-[350px]">
                           $783 USD night
                        </p>
                     </div>
                     <div className="flex gap-x-8"></div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}

export default Compare;
