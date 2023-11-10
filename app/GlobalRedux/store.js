"use client";

import { configureStore } from "@reduxjs/toolkit";
import selectionReducer from "./Features/selection/selectionSlice";

export const store = configureStore({
   reducer: {
      selection: selectionReducer,
   },
});
