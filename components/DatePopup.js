import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function DatePopup({
   startDate,
   endDate,
   setStartDate,
   setEndDate,
   setSelected,
}) {
   const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
   };

   const handleDateSelect = (ranges) => {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
   };

   return (
      <div className="absolute top-[70px] left-[100px] rounded-[30px] bg-white shadow-lg">
         <div className="flex justify-center">
            <div className="mt-5 flex justify-between items-center space-x-1 rounded-full bg-[#ebebeb] w-[300px] h-[45px] px-1 ">
               <button className="bg-white h-[80%] flex-grow rounded-full text-sm border-[1px] border-gray-300">
                  Dates
               </button>
               <button className="hover:bg-[#dddddd] h-[80%] flex-grow rounded-full text-sm">
                  Months
               </button>
               <button className="hover:bg-[#dddddd] h-[80%] flex-grow rounded-full text-sm">
                  Flexible
               </button>
            </div>
         </div>
         <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#f7f7f7", "#222222"]}
            onChange={handleDateSelect}
            months={2}
            color="#000000"
            direction="horizontal"
            staticRanges={[]}
            inputRanges={[]}
            // showPreview={false}
         />
      </div>
   );
}

export default DatePopup;
