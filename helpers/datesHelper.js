import { format } from "date-fns";
// Format Date objects to strings for display

export const formatDate = (date) => {
   return format(new Date(date), "MMM. d");
};

export const formatDateRange = (start, end) => {
   let displayDate = "";

   if (start == null) {
      return displayDate;
   }

   // case 1: if end date not specified then let it be day after start date
   if (start != null && end == null) {
      // TODO
      // end = format(new Date(startDate) + 1, "MMM. d");
      console.log("date here");
   }

   const formattedStart = formatDate(start);
   const formattedEnd = formatDate(end);
   // case 2: if start & end dates in same month, display month once
   if (formattedStart.slice(0, 3) === formattedEnd.slice(0, 3)) {
      displayDate = `${formattedStart} - ${format(
         new Date(end),
         "d"
      )}`;
   } else {
      displayDate = `${formattedStart} – ${formattedEnd}`;
   }
   return displayDate;
};
