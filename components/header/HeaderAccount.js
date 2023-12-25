"use client";
import React from "react";
import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function HeaderAccount() {
   return (
      <div className="flex items-center space-x-4 justify-end text-[##222222] text-sm">
         <p className="hidden lg:inline cursor-pointer">
            Airbnb your home
         </p>
         <GlobeAltIcon className="hidden md:flex h-6 cursor-pointer" />

         <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <Bars3Icon className="h-6" />
            <UserCircleIcon className="h-6" />
         </div>
      </div>
   );
}

export default HeaderAccount;
