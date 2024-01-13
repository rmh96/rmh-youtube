import { configureStore } from "@reduxjs/toolkit";
import globalAppSlice from "./globalAppSlice";
import searchSlice from "./searchSlice";
import commentSlice from "./commentSlice";

const store = configureStore({
  reducer: {
    app: globalAppSlice,
    search: searchSlice,
    comment: commentSlice,
  },
});

export default store;
