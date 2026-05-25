import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};
const slice = createSlice({
  name: "SearchBox",
  initialState,
  reducers: {},
});

export const SearchBoxReducer = slice.reducer;
