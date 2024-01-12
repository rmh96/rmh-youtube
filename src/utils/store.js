import { configureStore } from "@reduxjs/toolkit";
import globalAppSlice from "./globalAppSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: globalAppSlice,
    search: searchSlice,
  },
});

export default store;
