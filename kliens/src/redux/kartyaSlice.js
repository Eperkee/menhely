import { createSlice } from "@reduxjs/toolkit";

export const kartyaSlice = createSlice({
  name: "kartya",
  initialState: {
    kosar: [],
    osszar: 0,
  },
  reducers: {
    feltolt: (state, action) => {
      state.kosar = state.kosar.concat(action.payload.adat);
      state.osszar = state.osszar + action.payload.ar;
    },
  },
});

export const { feltolt } = kartyaSlice.actions;
export default kartyaSlice.reducer;
