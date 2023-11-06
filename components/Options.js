import React from "react";
import Image from "next/image";
import CityCard from "./CityCard";
import MediumCard from "./MediumCard";
import LargeCard from "./LargeCard";

const getData = async () => {
   const exploreData = await fetch(
      "https://www.jsonkeeper.com/b/4G1G"
   ).then((res) => res.json());

   return exploreData;
};

const getCardsData = async () => {
   const exploreData = await fetch(
      "https://www.jsonkeeper.com/b/VHHT"
   ).then((res) => res.json());

   return exploreData;
};

async function Options() {
   const exploreData = await getData();
   const cardsData = await getCardsData();
   return (
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
         <section className="pt-6">
            <h2 className="text-4xl font-semibold">Explore Nearby</h2>
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
            <h2 className="text-4xl font-semibold py-8">
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
               img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
               title="The Greatest Outdoors"
               description="Wishlists curated by Airbnb."
               buttonText="Get Inspired"
            />
         </section>
      </main>
   );
}

export default Options;
