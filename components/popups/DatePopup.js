import React, { useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import MobileClosed from "../mobile/MobileClosed";
import "../../styles/Calendar.css";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
   setSelection,
   getSelection,
} from "../../app/GlobalRedux/Features/selection/selectionSlice";
// Helper
import { formatDateRange } from "../../helpers/datesHelper";

function DatePopup({ startDate, endDate, setStartDate, setEndDate }) {
   const dispatch = useDispatch();
   const selection = useSelector(getSelection);

   const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
   };

   const handleDateSelect = (ranges) => {
      const start = ranges.selection.startDate;
      const end = ranges.selection.endDate;

      // End not selected yet
      if (start === end) {
         dispatch(setSelection("check-in"));
      }
      setStartDate(ranges.selection.startDate);
      // dispatch(setSelection("check-out"));
      if (start !== end) {
         dispatch(setSelection("check-out"));
      }
      setEndDate(ranges.selection.endDate);
   };

   const dateRange = formatDateRange(startDate, endDate);

   return selection === "check-in" || selection === "check-out" ? (
      <div
         className="flex flex-col border items-center border-gray-200 rounded-t-[30px]
          bg-white shadow-lg w-[96%] flex-grow relative
          sm:absolute sm:top-[70px] sm:left-[5] sm:w-fit sm:h-fit sm:rounded-[30px] sm:p-1"
      >
         <h2 className="flex w-full sm:hidden font-bold text-xl text-[#222222] pt-8 px-8 pb-2">
            When's your trip?
         </h2>
         {/* Buttons */}
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
         {/* Calendar */}
         <div className="hidden sm:flex">
            <DateRangePicker
               ranges={[selectionRange]}
               minDate={new Date()}
               onChange={handleDateSelect}
               months={2}
               direction="horizontal"
               staticRanges={[]}
               inputRanges={[]}
               rangeColors={["#ffffff"]}
            />
         </div>
         <div className="flex mt-4 justify-center sm:hidden overflow-y-scroll w-full h-[310px]">
            <DateRangePicker
               ranges={[selectionRange]}
               minDate={new Date()}
               onChange={handleDateSelect}
               months={5}
               direction="vertical"
               staticRanges={[]}
               inputRanges={[]}
               rangeColors={["#ffffff"]}
            />
         </div>

         {/* Footer for Mobile View*/}
         <div
            className="flex sm:hidden justify-between border-t-[1px] 
            border-[#eeeeee]  w-full absolute bottom-0 px-6 items-center h-[70px]"
         >
            <button className="font-lg underline">Reset</button>
            <button
               className="bg-[#222222] text-white flex justify-center items-center 
                  p-3 w-[85px] rounded-lg h-[45px]"
               onClick={() => dispatch(setSelection("who"))}
            >
               Next
            </button>
         </div>
      </div>
   ) : (
      <MobileClosed
         category={"When"}
         description={dateRange == "" ? "Add dates" : dateRange}
      />
   );
}

export default DatePopup;
