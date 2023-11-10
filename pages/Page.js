import React from "react";
import Header from "@/components/header/Header";
import Banner from "@/components/Banner";
import Options from "@/components/Options";
import Footer from "@/components/Footer";

function Page() {
   return (
      <>
         <Header fromSearch={false} />

         <Banner />
         <Options />

         <Footer />
      </>
   );
}

export default Page;
