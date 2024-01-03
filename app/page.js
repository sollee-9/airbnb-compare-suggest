import Head from "next/head";
import Page from "../pages/Page";
import { Providers } from "./GlobalRedux/providers";

export default function Home() {
   return (
      <Providers>
         <main className="">
            <Head>
               <title>Airbnb</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>

            <Page />
         </main>
      </Providers>
   );
}
