import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "53730d6999267440358ba56988ad3717";

export const fetchData = createAsyncThunk(
  "weather/fetchData",

  async (city) => {
    try {
      const geoResponse = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
      );

      const location = geoResponse.data[0];

      const lat = location.lat;
      const lon = location.lon;

      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&units=metric&appid=${API_KEY}`
      );
      return {
        weather: weatherResponse.data,
        cityName: location.local_names?.uk || location.name,
      };
    } catch (error) {
      console.log(error);
    }
  }
);
