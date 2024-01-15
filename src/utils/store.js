import { configureStore } from "@reduxjs/toolkit";
import globalAppSlice from "./globalAppSlice";
import searchSlice from "./searchSlice";
import commentSlice from "./commentSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: globalAppSlice,
    search: searchSlice,
    comment: commentSlice,
    chat: chatSlice,
  },
});

export default store;
