import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import RoomInfoCard from "../..//components/cards/RoomInfoCard";
import Map from "../..//components/map/Map";
import OptionsHeader from "../../components/header/OptionsHeader";
import { Providers } from "../GlobalRedux/provider";

async function Search() {
   const data = [
      {
         img: "https://links.papareact.com/xqj",
         location: "Private room in center of London",
         title: "Stay at this spacious Edwardian House",
         description:
            "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
         star: 4.73,
         price: "£30 / night",
         total: "£117 total",
         long: -0.0022275,
         lat: 51.5421655,
      },
      {
         img: "https://links.papareact.com/hz2",
         location: "Private room in center of London",
         title: "Independant luxury studio apartment",
         description:
            "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
         star: 4.3,
         price: "£40 / night",
         total: "£157 total",
         long: -0.095091,
         lat: 51.48695,
      },
      {
         img: "https://links.papareact.com/uz7",
         location: "Private room in center of London",
         title: "London Studio Apartments",
         description:
            "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
         star: 3.8,
         price: "£35 / night",
         total: "£207 total",
         long: -0.135638,
         lat: 51.521916,
      },
      {
         img: "https://links.papareact.com/6as",
         location: "Entire studio in central Oxford",
         title: "30 mins to Oxford Street, Excel London",
         description:
            "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
         star: 4.1,
         price: "£55 / night",
         total: "£320 total",
         long: -0.069961,
         lat: 51.472618,
      },
      {
         img: "https://links.papareact.com/xhc",
         location: "Private room in center of London",
         title: "Spacious Peaceful Modern Bedroom",
         description:
            "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
         star: 5.0,
         price: "£60 / night",
         total: "£450 total",
         long: -0.08472,
         lat: 51.510794,
      },
      {
         img: "https://links.papareact.com/pro",
         location: "Private room in center of London",
         title: "The Blue Room In London",
         description:
            "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
         star: 4.23,
         price: "£65 / night",
         total: "£480 total",
         long: -0.094116,
         lat: 51.51401,
      },
      {
         img: "https://links.papareact.com/8w2",
         location: "Private room in center of London",
         title: "5 Star Luxury Apartment",
         description:
            "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
         star: 3.85,
         price: "£90 / night",
         total: "£650 total",
         long: -0.109889,
         lat: 51.521245,
      },
   ];

   return (
      <Providers>
         <div className="flex flex-col">
            {/* Header */}
            <Header />
            <OptionsHeader />

            {/* Room Results */}
            <main className="grid grid-cols-1 sm:flex">
               <section
                  className="flex-grow w-[100%] z-20  bg-white 
               absolute top-[300px] order-2 rounded-t-[30px]
            sm:order-1 sm:relative sm:top-0 sm:rounded-none "
               >
                  <p className="text-sm font-medium m-6">
                     Over 1,000 places within map area
                     {/* TODO within ___ x city */}
                  </p>
                  <div className="px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-[100%] gap-8 gap-x-6">
                     {data.map(
                        ({
                           img,
                           location,
                           title,
                           description,
                           star,
                           price,
                           total,
                           long,
                           lat,
                        }) => (
                           <RoomInfoCard
                              key={`${long}${lat}`}
                              img={img}
                              location={location}
                              title={title}
                              description={description}
                              star={star}
                              price={price}
                              total={total}
                              long={long}
                              lat={lat}
                           />
                        )
                     )}
                  </div>
               </section>

               {/* Map Area */}
               <section
                  className="flex flex-grow order-1 
                  w-[100%] h-[320px]
                  sm:hidden 
                  md:order-2 md:flex md:w-[45%] md:max-w-[550px] md:h-[1400px]"
               >
                  <Map searchResults={data} />
               </section>
            </main>

            <Footer />
         </div>
      </Providers>
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
