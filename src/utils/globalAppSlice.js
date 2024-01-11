import { createSlice } from "@reduxjs/toolkit";

const globalAppSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    mainVideoList: [],
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    addMainVideoList: (state, action) => {
      state.mainVideoList = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, addMainVideoList } =
  globalAppSlice.actions;
export default globalAppSlice.reducer;
