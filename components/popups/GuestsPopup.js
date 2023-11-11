import React from "react";
import GuestsPopupSection from "./GuestsPopupSection";
import MobileClosed from "../mobile/MobileClosed";
// Redux
import { useSelector } from "react-redux";
import { getSelection } from "../../app/GlobalRedux/Features/selection/selectionSlice";

function GuestsPopup({
   numAdults,
   setNumAdults,
   numChildren,
   setNumChildren,
   numInfants,
   setNumInfants,
   numPets,
   setNumPets,
}) {
   const selection = useSelector(getSelection);
   const totalGuests =
      parseInt(numAdults) +
      parseInt(numChildren) +
      parseInt(numInfants) +
      parseInt(numPets);

   return selection === "who" ? (
      <div
         className="border border-gray-200 flex-col bg-white rounded-[30px] shadow-lg items-center p-8 
            w-[96%] h-[380px] sm:h-auto sm:absolute sm:top-[70px] sm:right-0 sm:p-6 sm:w-[400px]"
      >
         <h2 className="flex sm:hidden font-bold text-xl text-theme-black mb-4">
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
   ) : selection !== "check-in" && selection !== "check-out" ? (
      <MobileClosed
         category={"Who"}
         description={
            totalGuests !== 0
               ? totalGuests > 1
                  ? `${totalGuests} guests`
                  : "1 guest"
               : "Add guests"
         }
      />
   ) : null;
}

export default GuestsPopup;
