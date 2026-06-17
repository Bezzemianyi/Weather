import { configureStore } from "@reduxjs/toolkit";
import { WeatherDataReducer } from "./WeatherData/WeatherDataSlice";

export const store = configureStore({
  reducer: {
    weather: WeatherDataReducer,
  },
});
