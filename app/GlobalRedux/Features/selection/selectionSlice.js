"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: "",
};
export const selectionSlice = createSlice({
   name: "selection",
   initialState,
   reducers: {
      setSelection: (state, action) => {
         state.value = action.payload;
      },
   },
});

export const { setSelection } = selectionSlice.actions;

export const getSelection = (state) => state.selection.value;

export default selectionSlice.reducer;
