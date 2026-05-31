import { useSelector } from "react-redux";
import {
  getWeatherImage,
  getWeatherText,
} from "../../utils/getWeatherImage.js";
import s from "./WeatherDays.module.css";
const Item = ({ day }) => {
  const condition = day.weather;

  const formattedDayName =
    day.dayName.charAt(0).toUpperCase() + day.dayName.slice(1);
  const image = getWeatherImage(condition, day.isDay);
  const text = getWeatherText(condition);
  return (
    <div className={s.card}>
      <p className={s.dayName}>{formattedDayName}</p>
      <div className={s.weather}>
        {" "}
        <img className={s.img} src={image} alt={text} />
        <p className={s.discription}>{text}</p>
      </div>

      <p className={s.maxMin}>
        {day.min.toFixed(0)}° / {day.max.toFixed(0)}°
      </p>
    </div>
  );
};

export default Item;
