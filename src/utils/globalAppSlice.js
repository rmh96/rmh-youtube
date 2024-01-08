import { createSlice } from "@reduxjs/toolkit";

const globalAppSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = globalAppSlice.actions;
export default globalAppSlice.reducer;
