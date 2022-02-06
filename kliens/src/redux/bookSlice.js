import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
  },
  reducers: {
    feltolt: (state, action) => {
      state.books = action.payload.books;
    },
  },
});

export const { feltolt } = bookSlice.actions;
export default bookSlice.reducer;
