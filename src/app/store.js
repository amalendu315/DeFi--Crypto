import { configureStore } from "@reduxjs/toolkit";
import { cryptoNewsApi } from "../services/cryptoNewsAPI";

export default configureStore({
  reducer: {
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});