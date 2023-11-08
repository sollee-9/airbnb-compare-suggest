import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { SocialIcon } from "react-social-icons";

function Footer() {
   return (
      <div className="bg-[#f7f7f7] border border-t-1">
         <div className="hidden sm:block md:flex lg:flex px-12 lg:px-24 ">
            <div className="space-y-4 text-xs text-gray-800 sm:py-8 md:max-w-[350px] md:flex-grow md:mr-12">
               <h5 className="font-medium text-sm text-[#232323]">
                  Support
               </h5>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Help Centre
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  AirCover
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Anti-discrimination
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Disability support
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Cancellation options
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Report neighbourhood concern
               </p>
            </div>

            <div className="space-y-4 text-xs text-gray-800 sm:border-t sm:py-8 md:border-0  md:max-w-[350px] md:flex-grow md:mr-12">
               <h5 className="font-medium text-sm">Hosting</h5>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Airbnb your home
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  AirCover for Hosts
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Hosting resources
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Community forum
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Hosting responsibly
               </p>
            </div>

            <div className="space-y-4 text-xs text-gray-800 sm:py-8 sm:border-t md:border-0 md:max-w-[350px] md:flex-grow">
               <h5 className="font-medium text-sm">Airbnb</h5>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Newsroom
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  New features
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Careers
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Investors
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Gift cards
               </p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Airbnb.org emergency stays
               </p>
            </div>
         </div>

         <div className="hidden px-12 lg:px-24 py-5 pt-8 border border-t-1 sm:block md:flex">
            <div className="flex sm:mb-3 flex-grow sm:justify-center md:order-3 md:justify-end items-center">
               <div className="flex mr-4">
                  <GlobeAltIcon className="h-5 mr-1" />
                  <p className="text-sm text-[#2b2b2b] font-medium">
                     English (US)
                  </p>
               </div>

               <p className="mr-6 text-sm text-[#2b2b2b] font-medium">
                  ₩ KRW
               </p>
               <SocialIcon
                  network="facebook"
                  bgColor="black"
                  style={{
                     height: "20px",
                     width: "20px",
                     marginRight: "5px",
                  }}
                  className="rounded-none h-6"
               />
               <SocialIcon
                  network="twitter"
                  bgColor="black"
                  style={{
                     height: "20px",
                     width: "20px",
                     marginRight: "5px",
                  }}
               />
               <SocialIcon
                  network="instagram"
                  bgColor="black"
                  style={{
                     height: "20px",
                     width: "20px",
                     marginRight: "5px",
                  }}
               />
            </div>

            <div className="flex justify-center md:order-1">
               <p className="text-sm text-[#2b2b2b] font-light">
                  © No copyright intended
               </p>
            </div>

            <div className="flex justify-center md:order-2">
               <p className="hidden md:inline mx-2">·</p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Terms
               </p>
               <p className="mx-2">·</p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Sitemap
               </p>
               <p className="mx-2">·</p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Privacy
               </p>
               <p className="mx-2">·</p>
               <p className="text-sm text-[#2b2b2b] font-light">
                  Your Privacy Choices
               </p>
            </div>
         </div>
      </div>
   );
}

export default Footer;
