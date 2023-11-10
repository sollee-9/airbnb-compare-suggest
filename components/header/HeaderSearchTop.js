import React from "react";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSelection } from "../../app/GlobalRedux/Features/selection/selectionSlice";

function HeaderSearchTop() {
   const dispatch = useDispatch();

   const router = useRouter();

   const goToHome = () => {
      router.push("/");
   };

   return (
      <>
         {/* Left */}
         <button
            onClick={() => dispatch(setSelection("search"))}
            className="hidden md:flex relative items-center h-10 cursor-pointer my-auto"
         >
            <Image
               onClick={goToHome}
               src="https://links.papareact.com/qd3"
               style={{
                  objectFit: "contain",
                  objectPosition: "left",
               }}
               fill
               sizes="100vw"
               alt="airbnb logo"
            />
         </button>

         {/* Middle */}
         <div
            className="flex flex-grow"
            onClick={() => dispatch(setSelection("search"))}
         >
            <button className="p-5 font-light underline">
               Stays
            </button>
            <button className="p-5 font-light">Experiences</button>
            <button className="p-5 font-light">
               Online Experiences
            </button>
         </div>

         {/* Right */}
         <div
            className="hidden md:flex items-center space-x-4 justify-end text-[##222222] text-sm"
            onClick={() => dispatch(setSelection("search"))}
         >
            <p className="hidden lg:inline cursor-pointer">
               Airbnb your home
            </p>
            <GlobeAltIcon className="h-6 cursor-pointer" />

            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
               <Bars3Icon className="h-6" />
               <UserCircleIcon className="h-6" />
            </div>
         </div>
      </>
   );
}

export default HeaderSearchTop;
