import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/Banner";
import Options from "../components/Options";
import Footer from "../components/Footer";
import { Providers } from "../app/GlobalRedux/providers";

function Page() {
   return (
      <Providers>
         <Header />

         <Banner />
         <Options />

         <Footer />
      </Providers>
   );
}

export default Page;
