import Head from "next/head";
import Page2 from "@/pages/Page2";

export default function Home() {
   return (
      <main className="">
         <Head>
            <title>Airbnb</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         {/* <Page1 /> */}
         <Page2 />
      </main>
   );
}
