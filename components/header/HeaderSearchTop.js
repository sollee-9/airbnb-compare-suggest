import React, { useState } from "react";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSelection } from "../../app/GlobalRedux/Features/selection/selectionSlice";

function HeaderSearchTop() {
   const [toggleCategory, setToggleCategory] = useState("Stays");

   const dispatch = useDispatch();
   const router = useRouter();

   const goToHome = () => {
      router.push("/");
   };

   return (
      <div className="flex md:flex justify-between md:h-[50px]">
         {/* Left */}
         <button
            onClick={() => dispatch(setSelection("search"))}
            className="hidden sm:flex relative items-center h-[40px] w-[150px] cursor-pointer my-auto"
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
            className="hidden md:flex flex-grow justify-center items-center"
            onClick={() => dispatch(setSelection("search"))}
         >
            <button
               className={`py-2 mx-4 font-light box-border ${
                  toggleCategory === "Stays"
                     ? "border-b-2 border-[#222222]"
                     : ""
               }`}
               onClick={() => setToggleCategory("Stays")}
            >
               Stays
            </button>
            <button
               className={`py-2 mx-4 font-light box-border  ${
                  toggleCategory === "Experiences"
                     ? "border-b-2 border-[#222222]"
                     : ""
               }`}
               onClick={() => setToggleCategory("Experiences")}
            >
               Experiences
            </button>
            <button
               className={`py-2 mx-4 font-light box-border ${
                  toggleCategory === "Online Experiences"
                     ? "border-b-2 border-[#222222]"
                     : ""
               }`}
               onClick={() => setToggleCategory("Online Experiences")}
            >
               Online Experiences
            </button>
         </div>

         {/* Right */}
         <div
            className="hidden sm:flex items-center space-x-4 text-theme-black text-sm"
            onClick={() => dispatch(setSelection("search"))}
         >
            <p className="hidden lg:inline cursor-pointer">
               Airbnb your home
            </p>
            <GlobeAltIcon className="h-5 cursor-pointer" />

            <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
               <Bars3Icon className="h-6" />
               <UserCircleIcon className="h-6" />
            </div>
         </div>
      </div>
   );
}

export default HeaderSearchTop;
