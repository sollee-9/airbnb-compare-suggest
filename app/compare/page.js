import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import Compare from "../../components/compare/Compare";
import { Providers } from "../GlobalRedux/providers";

async function Wishlist() {
   return (
      <Providers>
         <div className="flex flex-col">
            {/* Header */}
            <Header searchFields={false} />

            {/* Comparison Page */}
            <Compare />

            {/* Footer */}
            <Footer />
         </div>
      </Providers>
   );
}

export default Wishlist;
