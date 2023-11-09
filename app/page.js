import Head from "next/head";
import Page from "@/pages/Page";

export default function Home() {
   return (
      <main className="">
         <Head>
            <title>Airbnb</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Page />
      </main>
   );
}
