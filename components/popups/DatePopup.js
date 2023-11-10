import React, { useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import MobileClosed from "../mobile/MobileClosed";
// Redux
import { useSelector, useDispatch } from "react-redux";
import {
   setSelection,
   getSelection,
} from "../../app/GlobalRedux/Features/selection/selectionSlice";

function DatePopup({ startDate, endDate, setStartDate, setEndDate }) {
   const dispatch = useDispatch();
   const selection = useSelector(getSelection);

   const selectionRange = {
      startDate: startDate,
      endDate: endDate,
      key: "selection",
   };

   // TODO
   // useEffect(() => {
   //    dispatch(setSelection("check-in"));
   // }, [startDate]);

   const handleDateSelect = (ranges) => {
      setStartDate(ranges.selection.startDate);
      dispatch(setSelection("check-out"));
      setEndDate(ranges.selection.endDate);
   };

   return selection === "check-in" || selection === "check-out" ? (
      <div
         className="flex-col h-[540px] border items-center border-gray-200 rounded-t-[30px] bg-white shadow-lg p-1 w-[96%]
          sm:absolute sm:top-[70px] sm:left-[5] sm:w-fit sm:h-fit sm:rounded-[30px]"
      >
         <h2 className="flex sm:hidden font-bold text-xl text-[#222222] mb-4">
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
               rangeColors={["#f7f7f7", "#222222"]}
               onChange={handleDateSelect}
               months={2}
               color="#000000"
               direction="horizontal"
               staticRanges={[]}
               inputRanges={[]}
            />
         </div>
         <div className="flex mt-4 justify-center sm:hidden overflow-y-scroll h-[350px]">
            <DateRangePicker
               ranges={[selectionRange]}
               minDate={new Date()}
               rangeColors={["#f7f7f7", "#222222"]}
               onChange={handleDateSelect}
               months={5}
               color="#000000"
               direction="vertical"
               staticRanges={[]}
               inputRanges={[]}
            />
         </div>

         {/* Footer for Mobile View*/}
         <div
            className="flex sm:hidden justify-between bg-white border-t-[1px] 
            border-[#eeeeee] px-6 items-center"
         >
            <button className="font-lg underline">Reset</button>
            <button
               className="bg-[#222222] text-white flex justify-center items-center 
                  p-3 w-[85px] rounded-md mt-1"
               onClick={() => dispatch(setSelection("who"))}
            >
               Next
            </button>
         </div>
      </div>
   ) : (
      <MobileClosed category={"When"} description={"Add dates"} />
   );
}

export default DatePopup;
