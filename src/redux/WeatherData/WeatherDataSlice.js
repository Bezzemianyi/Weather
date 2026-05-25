import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../Operations/SearchOps";

const initialState = {
  current: null,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: `weather`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload.weather;
        console.log(state.current);
        state.current.name = action.payload.cityName;
      })

      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const WeatherDataReducer = slice.reducer;
