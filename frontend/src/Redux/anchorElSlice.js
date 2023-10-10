// anchorElSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const anchorElSlice = createSlice({
  name: "anchorEl",
  initialState: {
    infoState: null,
    newState: null,
    menuItemState: null,
    // Add a property to store anchor position data
    anchorPosition: { x: 0, y: 0 },
  },
  reducers: {
    setInfoState: (state, action) => {
      state.infoState = action.payload;
    },
    setNewState: (state, action) => {
      state.newState = action.payload;
    },
    setMenuItemState: (state, action) => {
      state.menuItemState = action.payload;
    },
    // Add a reducer to update the anchor position
    setAnchorPosition: (state, action) => {
      state.anchorPosition = action.payload;
    },
  },
});

export const {
  setInfoState,
  setNewState,
  setMenuItemState,
  setAnchorPosition, // Export the new reducer
} = anchorElSlice.actions;
export default anchorElSlice.reducer;
