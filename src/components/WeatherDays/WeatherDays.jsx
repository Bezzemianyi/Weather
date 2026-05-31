import { useSelector } from "react-redux";
import { getWeatherImage } from "../../utils/getWeatherImage.js";
import s from "./WeatherDays.module.css";

import Item from "./Item.jsx";

const WeatherDays = () => {
  const forecast = useSelector((state) => state.weather.forecast);
  if (!forecast.length) return null;
  const dailyForecast = forecast
    .filter((item) => item.dt_txt.includes("15:00:00"))
    .map((day) => ({
      dayName: new Date(day.dt_txt).toLocaleDateString("uk-UA", {
        weekday: "long",
      }),
      date: day.dt_txt.slice(0, 10),
      temp: day.main.temp,
      min: day.main.temp_min,
      max: day.main.temp_max,
      weather: day.weather[0].main,
      isDay: day.sys.pod === "d",
    }));
  return (
    <div className={s.forecastBox}>
      <p className={s.title}>Прогноз на 5 днів</p>
      {dailyForecast.slice(0, 5).map((day) => (
        <Item key={day.date} day={day} />
      ))}
    </div>
  );
};

export default WeatherDays;
