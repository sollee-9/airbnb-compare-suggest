import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import WishlistContent from "../../components/wishlist/WishlistContent";

async function Wishlist() {
   return (
      <div className="flex flex-col">
         {/* Header */}
         <Header searchFields={false} />

         {/* Wishlist */}
         <WishlistContent />

         {/* Footer */}
         <Footer />
      </div>
   );
}

export default Wishlist;
