import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheSearchQuery: (state, action) => {
      console.log(action.payload);

      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
