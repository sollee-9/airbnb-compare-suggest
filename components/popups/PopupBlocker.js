import React from "react";

function PopupBlocker({ setSelected }) {
   return (
      <div
         className="hidden sm:flex fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,.2)] z-30 h-[100%] w-[100%]"
         onClick={() => setSelected("")}
      ></div>
   );
}

export default PopupBlocker;
