import { getWeatherImage } from "../../utils/getWeatherImage.js";
import s from "./WeatherTodayList.module.css";

const ForecastCard = ({ item }) => {
  const condition = item.weather[0].main;

  const isDay = item.sys.pod === "d";

  const image = getWeatherImage(condition, isDay);

  return (
    <div className={s.card}>
      <p className={s.time}>{item.dt_txt.slice(11, 16)}</p>

      <img className={s.icon} src={image} alt={item.weather[0].description} />

      {/* <p className={s.weather}>{item.weather[0].main}</p> */}

      <p className={s.temp}>{item.main.temp.toFixed(0)}°</p>
    </div>
  );
};

export default ForecastCard;
