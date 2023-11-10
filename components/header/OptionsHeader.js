"use client";
import React, { useState } from "react";
import HolidayVillageOutlinedIcon from "@mui/icons-material/HolidayVillageOutlined";
import BeachAccessOutlinedIcon from "@mui/icons-material/BeachAccessOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import WaterOutlinedIcon from "@mui/icons-material/WaterOutlined";
import ForestOutlinedIcon from "@mui/icons-material/ForestOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import DownhillSkiingOutlinedIcon from "@mui/icons-material/DownhillSkiingOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import CabinOutlinedIcon from "@mui/icons-material/CabinOutlined";
import SportsGolfOutlinedIcon from "@mui/icons-material/SportsGolfOutlined";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";
import VillaOutlinedIcon from "@mui/icons-material/VillaOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import OptionIcon from "../cards/OptionIcon";
// Redux
import { useSelector } from "react-redux";
import { getSelection } from "../../app/GlobalRedux/Features/selection/selectionSlice";

function OptionsHeader() {
   const selection = useSelector(getSelection);

   const [iconSelected, setIconSelected] = useState("Your search");

   return (
      selection === "" && (
         <header
            className="hidden sm:flex h-[80px] z-40 w-[100%] sticky justify-between items-baseline
            bg-white shadow-sm top-[90px] px-4"
         >
            {/* Carousel */}
            <div className="flex overflow-x-scroll scrollbar-hide overscroll-contain">
               <OptionIcon
                  icon={
                     <HolidayVillageOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text={"Your search"}
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <div className="flex self-center h-[40px] border border-r-[0px] border-[#b0b0b0] ml-6 mr-4"></div>
               <OptionIcon
                  icon={
                     <BedOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Rooms"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <BeachAccessOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Beach"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <WaterOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Amazing pools"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <YardOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Amazing views"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <ForestOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Lake"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <LocalFireDepartmentOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Trending"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <DownhillSkiingOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Skiing"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <ColorLensOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Creative spaces"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <CabinOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Cabins"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <SportsGolfOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Golf"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <CoffeeOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Bed & breakfasts"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <VillaOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Tiny homes"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <GridViewOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="Off the grid"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
               <OptionIcon
                  icon={
                     <AutoAwesomeOutlinedIcon
                        className="text-[28px]"
                        sx={{ stroke: "#ffffff", strokeWidth: 0.35 }}
                     />
                  }
                  text="New"
                  iconSelected={iconSelected}
                  setIconSelected={setIconSelected}
               />
            </div>

            {/* Filters */}
            <button className="rounded-xl border-[1px] border-gray-300 flex p-3 items-center ml-8">
               <AdjustmentsHorizontalIcon className="h-5 mr-2" />
               <p className="text-xs font-medium">Filters</p>
            </button>
         </header>
      )
   );
}

export default OptionsHeader;
