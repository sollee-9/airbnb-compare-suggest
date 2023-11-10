import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import OptionsHeader from "../../components/header/OptionsHeader";
import RoomResults from "../../components/RoomResults";

async function Search() {
   return (
      <div className="flex flex-col">
         {/* Header */}
         <Header />
         <OptionsHeader />

         {/* Results */}
         <RoomResults />

         {/* Footer */}
         <Footer />
      </div>
   );
}

export default Search;

// TODO: API FIX
// const getServerData = async () => {
//    const serverData = await fetch(
//       "https://links.papareact.com/isz"
//    ).then((res) => res.json());
//    //www.jsonkeeper.com/b/5NPS
//    return serverData;
// };
