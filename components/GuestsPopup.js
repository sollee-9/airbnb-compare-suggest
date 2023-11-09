import React, { useEffect, useState } from "react";
import GuestsPopupSection from "./GuestsPopupSection";

function GuestsPopup({ setSelected, totalGuests, setTotalGuests }) {
   const [numAdults, setNumAdults] = useState(0);
   const [numChildren, setNumChildren] = useState(0);
   const [numInfants, setNumInfants] = useState(0);
   const [numPets, setNumPets] = useState(0);

   useEffect(() => {
      setTotalGuests(numAdults + numChildren + numInfants + numPets);
   }, [numAdults, numChildren, numInfants, numPets]);

   return (
      <div
         className="flex-col absolute h-[380px] min-w-[280px] sm:w-[280px] md:w-[400px] bg-white 
      top-[70px] rounded-[30px] shadow-lg items-center p-8 border border-gray-200 right-0"
      >
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
   );
}

export default GuestsPopup;
