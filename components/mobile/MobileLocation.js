import React, { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import MobileClosed from "./MobileClosed";
import { useSearchParams } from "next/navigation";

function MobileLocation({ selected, setSelected }) {
   const params = useSearchParams();
   const location = params.get("location");
   const [searchInput, setSearchInput] = useState(
      location ? location : ""
   );

   return selected === "Where" ? (
      <div className="flex-col h-[335px] w-[96%] bg-white rounded-[30px] shadow-lg justify-center py-6 border border-gray-200 z-50">
         <h2 className="mx-6 font-bold text-xl text-[#222222] mb-4">
            Where to?
         </h2>

         <div className="relative border-[1px] border-[#b2b2b2] rounded-xl p-4 flex mx-6 my-4">
            <MagnifyingGlassIcon className="h-5 absolute" />
            <input
               value={searchInput}
               onChange={(e) => setSearchInput(e.target.value)}
               type="text"
               placeholder="Search destinations"
               className="w-[100%] pl-8 placeholder-[#7b7b7b] text-sm outline-none border-none"
            />
         </div>

         <div className="flex space-x-3 overflow-scroll scrollbar-hide px-6">
            <div>
               <div className="relative h-[140px] w-[140px]">
                  <Image
                     src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                     fill
                     alt="World map"
                     className="rounded-xl border-[1px] border-[#e6e6e6] hover:border-[#3e3e3e]"
                  />
               </div>
               <h4 className="text-sm font-light mt-2">
                  I'm flexible
               </h4>
            </div>
            <div>
               <div className="relative h-[140px] w-[140px]">
                  <Image
                     src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
                     fill
                     alt="Europe on map"
                     className="rounded-xl border-[1px] border-[#e6e6e6] hover:border-[#3e3e3e]"
                  />
               </div>
               <h4 className="text-sm font-light mt-2">Europe</h4>
            </div>
            <div>
               <div className="relative h-[140px] w-[140px]">
                  <Image
                     src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320"
                     fill
                     alt="Japan on map"
                     className="rounded-xl border-[1px] border-[#e6e6e6] hover:border-[#3e3e3e]"
                  />
               </div>
               <h4 className="text-sm font-light mt-2">Japan</h4>
            </div>
            <div>
               <div className="relative h-[140px] w-[140px]">
                  <Image
                     src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
                     fill
                     alt="Southeast Asia on map"
                     className="rounded-xl border-[1px] border-[#e6e6e6] hover:border-[#3e3e3e]"
                  />
               </div>
               <h4 className="text-sm font-light mt-2">
                  Southeast Asia
               </h4>
            </div>
            <div>
               <div className="relative h-[140px] w-[140px]">
                  <Image
                     src="https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320"
                     fill
                     alt="Italy on map"
                     className="rounded-xl border-[1px] border-[#e6e6e6] hover:border-[#3e3e3e]"
                  />
               </div>
               <h4 className="text-sm font-light mt-2">Italy</h4>
            </div>
            <div>
               <div className="relative h-[140px] w-[140px]">
                  <Image
                     src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
                     fill
                     alt="United States on map"
                     className="rounded-xl border-[1px] border-[#e6e6e6] hover:border-[#3e3e3e]"
                  />
               </div>
               <h4 className="text-sm font-light mt-2">
                  United States
               </h4>
            </div>
         </div>
      </div>
   ) : (
      <MobileClosed
         category={"Where"}
         description={"I'm flexible"}
         setSelected={setSelected}
      />
   );
}

export default MobileLocation;
