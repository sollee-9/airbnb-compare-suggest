import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import Compare from "../../components/compare/Compare";

async function Wishlist() {
   return (
      <div className="flex flex-col">
         {/* Header */}
         <Header searchFields={false} />

         {/* Comparison Page */}
         <Compare />

         {/* Footer */}
         <Footer />
      </div>
   );
}

export default Wishlist;
