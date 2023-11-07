import React from "react";
import Image from "next/image";

function LocationPopup({ setSelected }) {
   return (
      <div
         className="flex-col absolute h-[460px] min-w-[300px] sm:w-[300px] md:w-[450px] bg-white 
               top-[70px] rounded-[30px] shadow-lg justify-start p-10 border border-gray-200 z-50"
      >
         <p className="font-medium text-sm mb-8">Search by region</p>

         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-8">
            <div>
               <Image
                  src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"
                  width={200}
                  height={200}
                  className="border-gray-200 border rounded-xl hover:border-gray-500"
                  alt="World map"
               />
               <h4 className="text-sm font-light mt-2">
                  I'm flexible
               </h4>
            </div>
            <div>
               <Image
                  src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"
                  width={200}
                  height={200}
                  className="border-gray-200 border rounded-xl hover:border-gray-500"
                  alt="Europe on map"
               />
               <h4 className="text-sm font-light mt-2">Europe</h4>
            </div>
            <div>
               <Image
                  src="https://a0.muscache.com/im/pictures/26891a81-b9db-4a9c-8aab-63486b7e627c.jpg?im_w=320"
                  width={200}
                  height={200}
                  className="border-gray-200 border rounded-xl hover:border-gray-500"
                  alt="Japan on map"
               />
               <h4 className="text-sm font-light mt-2">Japan</h4>
            </div>
            <div>
               <Image
                  src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"
                  width={200}
                  height={200}
                  className="border-gray-200 border rounded-xl hover:border-gray-500"
                  alt="Southeast Asia on map"
               />
               <h4 className="text-sm font-light mt-2">
                  Southeast Asia
               </h4>
            </div>
            <div>
               <Image
                  src="https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320"
                  width={200}
                  height={200}
                  className="border-gray-200 border rounded-xl hover:border-gray-500"
                  alt="Italy on map"
               />
               <h4 className="text-sm font-light mt-2">Italy</h4>
            </div>
            <div>
               <Image
                  src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"
                  width={200}
                  height={200}
                  className="border-gray-200 border rounded-xl hover:border-gray-500"
                  alt="United States on map"
               />
               <h4 className="text-sm font-light mt-2">
                  United States
               </h4>
            </div>
         </div>
      </div>
   );
}

export default LocationPopup;
