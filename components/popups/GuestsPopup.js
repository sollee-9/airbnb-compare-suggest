import React from "react";
import GuestsPopupSection from "./GuestsPopupSection";
import MobileClosed from "../mobile/MobileClosed";

function GuestsPopup({
   selected,
   setSelected,
   numAdults,
   setNumAdults,
   numChildren,
   setNumChildren,
   numInfants,
   setNumInfants,
   numPets,
   setNumPets,
}) {
   console.log(selected);
   return selected == "who" ? (
      <div
         className="h-[360px] w-[96%] flex-col absolute bg-white rounded-[30px] shadow-lg items-center p-8 
         border border-gray-200 
         sm:w-[280px] sm:h-[380px] sm:min-w-[280px] sm:top-[70px] sm:right-0
         md:w-[400px]"
      >
         <h2 className="inline sm:hidden font-bold text-xl text-[#222222] mb-4">
            Who's coming?
         </h2>
         <GuestsPopupSection
            category={"Adults"}
            description={"Ages 13 or above"}
            numPeople={numAdults}
            setNumPeople={setNumAdults}
         />
         <GuestsPopupSection
            category={"Children"}
            description={"Ages 2-12"}
            numPeople={numChildren}
            setNumPeople={setNumChildren}
         />
         <GuestsPopupSection
            category={"Infants"}
            description={"Under 2"}
            numPeople={numInfants}
            setNumPeople={setNumInfants}
         />
         <GuestsPopupSection
            category={"Pets"}
            description={"Bringing a service animal?"}
            descriptionLink={true}
            numPeople={numPets}
            setNumPeople={setNumPets}
            last={true}
         />
      </div>
   ) : (
      <>
         <MobileClosed
            category={"Who"}
            description={"Add guests"}
            setSelected={setSelected}
         />
         <p>here</p>
      </>
   );
}

export default GuestsPopup;
