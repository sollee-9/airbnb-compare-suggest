import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Options from "@/components/Options";

export default function Home() {
   return (
      <main className="">
         <Head>
            <title>Airbnb</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Header />
         <Banner />

         <Options />
      </main>
   );
}
