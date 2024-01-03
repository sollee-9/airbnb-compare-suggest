import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import WishlistContent from "../../components/wishlist/WishlistContent";
import { Providers } from "../GlobalRedux/providers";

async function Wishlist() {
   return (
      <Providers>
         <div className="flex flex-col">
            {/* Header */}
            <Header searchFields={false} />

            {/* Wishlist */}
            <WishlistContent />

            {/* Footer */}
            <Footer />
         </div>
      </Providers>
   );
}

export default Wishlist;
