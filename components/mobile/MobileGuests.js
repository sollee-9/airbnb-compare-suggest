import React from "react";
import MobileClosed from "./MobileClosed";
import GuestsPopupSection from "../popups/GuestsPopupSection";

function MobileGuests({ mobileSelect, setMobileSelect }) {
   return mobileSelect === "Who" ? (
      <div className="flex-col h-[360px] p-6 w-[96%] bg-white rounded-[30px] shadow-lg items-center py-6 border border-gray-200">
         <h2 className="font-bold text-xl text-[#222222] mb-4">
            Who's coming?
         </h2>
         <GuestsPopupSection
            category={"Adults"}
            description={"Ages 13 or above"}
         />
         <GuestsPopupSection
            category={"Children"}
            description={"Ages 2-12"}
         />
         <GuestsPopupSection
            category={"Infants"}
            description={"Under 2"}
         />
         <GuestsPopupSection
            category={"Pets"}
            description={"Bringing a service animal?"}
            descriptionLink={true}
            last={true}
         />
      </div>
   ) : (
      <MobileClosed
         category={"Who"}
         description={"Add guests"}
         setMobileSelect={setMobileSelect}
      />
   );
}

export default MobileGuests;
