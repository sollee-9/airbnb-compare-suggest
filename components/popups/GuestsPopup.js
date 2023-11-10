import React from "react";
import GuestsPopupSection from "./GuestsPopupSection";
import MobileClosed from "../mobile/MobileClosed";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
   setSelection,
   getSelection,
} from "../../app/GlobalRedux/Features/selection/selectionSlice";

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

   return selection === "who" ? (
      <div
         className="border border-gray-200 flex-col bg-white rounded-[30px] shadow-lg items-center p-8 
            w-[96%] sm:absolute sm:w-[280px] sm:min-w-[280px] sm:top-[70px] sm:right-0 sm:p-6
            md:w-[400px]"
      >
         <h2 className="flex sm:hidden font-bold text-xl text-[#222222] mb-4">
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
      <MobileClosed category={"Who"} description={"Add guests"} />
   );
}

export default GuestsPopup;
