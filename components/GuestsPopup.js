import React from "react";
import GuestsPopupSection from "./GuestsPopupSection";

function GuestsPopup({ setSelected, totalGuests, setTotalGuests }) {
   return (
      <div
         className="flex-col absolute h-[380px] min-w-[280px] sm:w-[280px] md:w-[400px] bg-white 
      top-[70px] rounded-[30px] shadow-lg items-center p-8 border border-gray-200 right-0"
      >
         <GuestsPopupSection
            category={"Adults"}
            description={"Ages 13 or above"}
            totalGuests={totalGuests}
            setTotalGuests={setTotalGuests}
         />
         <GuestsPopupSection
            category={"Children"}
            description={"Ages 2-12"}
            totalGuests={totalGuests}
            setTotalGuests={setTotalGuests}
         />
         <GuestsPopupSection
            category={"Infants"}
            description={"Under 2"}
            totalGuests={totalGuests}
            setTotalGuests={setTotalGuests}
         />
         <GuestsPopupSection
            category={"Pets"}
            description={"Bringing a service animal?"}
            descriptionLink={true}
            totalGuests={totalGuests}
            setTotalGuests={setTotalGuests}
            last={true}
         />
      </div>
   );
}

export default GuestsPopup;
