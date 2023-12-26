import React from "react";
import Image from "next/image";

function Banner() {
   return (
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] ">
         <Image
            src="https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/blt1d42db79c9237c3f/5fd42a60d0df66524b5d40ee/UK_Albufeira_Portugal_Header.jpg?width=1920&quality=70&auto=webp"
            fill={true}
            style={{ objectFit: "cover" }}
            alt="banner"
         />
         <div className="absolute top-[40%] w-full text-center">
            <p className="text-md sm:text-2xl text-white">
               Not sure where to go? Perfect.
            </p>
            <button className="text-[#222222] bg-white px-10 py-4 shadow-md rounded-full font-semibold my-3 hover:shadow-xl active:scale-90 transition duration-150">
               I'm flexible
            </button>
         </div>
      </div>
   );
}

export default Banner;
