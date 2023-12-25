import React from "react";
import { useRouter } from "next/navigation";

function AccountDropDown() {
   const router = useRouter();

   const goToWishlist = () => {
      router.push("/wishlist");
   };

   return (
      <div className="flex flex-col shadow-xl rounded-lg h-[400px] w-[220px] bg-white absolute top-12 ">
         <button className="dropdow-buttons font-medium rounded-t-lg">
            Messages
         </button>
         <button className="dropdow-buttons font-medium">
            Trips
         </button>
         <button
            className="dropdow-buttons font-medium"
            onClick={goToWishlist}
         >
            Wishlists
         </button>
         <hr />
         <button className="dropdow-buttons">Airbnb your home</button>
         <button className="dropdow-buttons">Refer a host</button>
         <button className="dropdow-buttons">Account</button>
         <hr />
         <button className="dropdow-buttons">Gift cards</button>
         <button className="dropdow-buttons">Help Centre</button>
         <button className="dropdow-buttons rounded-b-lg">
            Log out
         </button>
      </div>
   );
}

export default AccountDropDown;
