import { configureStore } from "@reduxjs/toolkit";
import globalAppSlice from "./globalAppSlice";

const store = configureStore({
  reducer: {
    app: globalAppSlice,
  },
});

export default store;
