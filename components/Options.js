import React from "react";
import CityCard from "./cards/CityCard";
import MediumCard from "./cards/MediumCard";
import LargeCard from "./cards/LargeCard";
import DinnerDiningOutlinedIcon from "@mui/icons-material/DinnerDiningOutlined";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined";
import LocalParkingOutlinedIcon from "@mui/icons-material/LocalParkingOutlined";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import { exploreData } from "../data/exploreData";

const getCardsData = async () => {
   const exploreData = await fetch(
      "https://www.jsonkeeper.com/b/VHHT"
   ).then((res) => res.json());

   return exploreData;
};

const cardsData = await getCardsData();

function Options() {
   return (
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
         <section className="pt-6">
            <h2 className="text-2xl font-semibold">Explore Nearby</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
               {exploreData?.map(({ img, location, distance }) => (
                  <CityCard
                     key={img}
                     img={img}
                     location={location}
                     distance={distance}
                  />
               ))}
            </div>
         </section>

         <section>
            <h2 className="text-2xl font-semibold pt-8 pb-4">
               Popular amenities for vacation rentals
            </h2>
            <div className="flex gap-x-2">
               <button className="amenities-button">
                  <DinnerDiningOutlinedIcon />
                  Kitchen
               </button>
               <button className="amenities-button">
                  <WifiRoundedIcon className="h-5" />
                  Wifi
               </button>
               <button className="amenities-button">
                  <WavesOutlinedIcon />
                  Pool
               </button>
               <button className="flex-grow amenities-button">
                  <LocalParkingOutlinedIcon />
                  Free parking on premises
               </button>
               <button className="amenities-button">
                  <AcUnitOutlinedIcon />
                  Air conditioning
               </button>
            </div>
         </section>

         <section>
            <h2 className="text-2xl font-semibold pt-8 pb-4">
               Live Anywhere
            </h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
               {cardsData?.map(({ img, title }) => (
                  <MediumCard key={img} title={title} img={img} />
               ))}
            </div>
         </section>

         <section className="relative py-16 cursor-pointer">
            <LargeCard
               img="https://images.contentstack.io/v3/assets/blt00454ccee8f8fe6b/bltd96fce46d0ce31ee/605c17090aa89f0eda276278/US_Alaska_US_Header.jpg?width=1920&quality=70&auto=webp"
               title="The Greatest Outdoors"
               description="Wishlists curated by Airbnb"
               buttonText="Get Inspired"
            />
         </section>
      </main>
   );
}

export default Options;
