// store.js

import { configureStore } from "@reduxjs/toolkit";
import anchorElReducer from "./anchorElSlice";

export const store = configureStore({
  reducer: {
    anchorEl: anchorElReducer,
  },
});
