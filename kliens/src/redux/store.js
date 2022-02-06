import { configureStore } from "@reduxjs/toolkit";
import kartyaReducer from "./kartyaSlice";
import bookReducer from "./bookSlice";

export default configureStore({
  reducer: {
    kartya: kartyaReducer,
    book: bookReducer,
  },
});
