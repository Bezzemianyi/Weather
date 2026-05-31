import { useSelector } from "react-redux";
import s from "./WeatherTodayList.module.css";
import { getWeatherImage } from "../../utils/getWeatherImage.js";

const WeatherTodayList = () => {
  const weather = useSelector((state) => state.weather.current);

  if (!weather) return null;

  const condition = weather.weather[0].main;

  const isDay =
    weather.dt >= weather.sys.sunrise && weather.dt < weather.sys.sunset;
  const image = getWeatherImage(condition, isDay);
  return (
    <main className={s.box}>
      <textInfo>
        <h1 className={s.city}>{weather.name}</h1>
        <h2 className={s.degree}>{weather.main.temp.toFixed(0)}°</h2>
      </textInfo>
      <imgInfo className={s.imgBox}>
        <img
          className={s.img}
          src={image}
          alt={weather.weather[0].description}
        />
      </imgInfo>
    </main>
  );
};

export default WeatherTodayList;
