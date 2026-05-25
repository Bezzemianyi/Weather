import { configureStore } from "@reduxjs/toolkit";
import { SearchBoxReducer } from "./SearchBox/SearchBoxSlice";
import { WeatherDataReducer } from "./WeatherData/WeatherDataSlice";

export const store = configureStore({
  reducer: {
    SearchBox: SearchBoxReducer,
    weather: WeatherDataReducer,
  },
});
