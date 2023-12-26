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
               <p className="footer-option">Help Centre</p>
               <p className="footer-option">AirCover</p>
               <p className="footer-option">Anti-discrimination</p>
               <p className="footer-option">Disability support</p>
               <p className="footer-option">Cancellation options</p>
               <p className="footer-option">
                  Report neighbourhood concern
               </p>
            </div>

            <div className="space-y-4 text-xs text-gray-800 sm:border-t sm:py-8 md:border-0  md:max-w-[350px] md:flex-grow md:mr-12">
               <h5 className="font-medium text-sm">Hosting</h5>
               <p className="footer-option">Airbnb your home</p>
               <p className="footer-option">AirCover for Hosts</p>
               <p className="footer-option">Hosting resources</p>
               <p className="footer-option">Community forum</p>
               <p className="footer-option">Hosting responsibly</p>
            </div>

            <div className="space-y-4 text-xs text-gray-800 sm:py-8 sm:border-t md:border-0 md:max-w-[350px] md:flex-grow">
               <h5 className="font-medium text-sm">Airbnb</h5>
               <p className="footer-option">Newsroom</p>
               <p className="footer-option">New features</p>
               <p className="footer-option">Careers</p>
               <p className="footer-option">Investors</p>
               <p className="footer-option">Gift cards</p>
               <p className="footer-option">
                  Airbnb.org emergency stays
               </p>
            </div>
         </div>

         <div className="hidden px-12 lg:px-24 py-5 pt-8 border border-t-1 sm:block md:flex">
            <div className="flex sm:mb-3 flex-grow sm:justify-center md:order-3 md:justify-end items-center">
               <div className="flex mr-4 md:hidden lg:flex">
                  <GlobeAltIcon className="h-5 mr-1" />
                  <p className="text-sm text-[#2b2b2b] font-medium">
                     English (US)
                  </p>
               </div>

               <p className="md:hidden lg:flex mr-6 text-sm text-[#2b2b2b] font-medium">
                  $ USD
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

            <div className="flex justify-center sm:order-1">
               <p className="footer-option">
                  © No copyright intended
               </p>
            </div>

            <div className="flex justify-center sm:order-2">
               <p className="hidden md:inline mx-2">·</p>
               <p className="footer-option">Terms</p>
               <p className="mx-2">·</p>
               <p className="footer-option">Sitemap</p>
               <p className="mx-2">·</p>
               <p className="footer-option">Privacy</p>
               <p className="mx-2">·</p>
               <p className="footer-option">Your Privacy Choices</p>
            </div>
         </div>
      </div>
   );
}

export default Footer;
