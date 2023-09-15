// anchorElSlice.js

import { createSlice } from "@reduxjs/toolkit";

export const anchorElSlice = createSlice({
  name: "anchorEl",
  initialState: {
    infoAnchorEl: null,
    newAnchorEl: null,
    menuItemAnchorEl: null,
  },
  reducers: {
    setInfoAnchorEl: (state, action) => {
      state.infoAnchorEl = action.payload;
    },
    setNewAnchorEl: (state, action) => {
      state.newAnchorEl = action.payload;
    },
    setMenuItemAnchorEl: (state, action) => {
      state.menuItemAnchorEl = action.payload;
    },
  },
});

export const { setInfoAnchorEl, setNewAnchorEl, setMenuItemAnchorEl } =
  anchorElSlice.actions;
export default anchorElSlice.reducer;
