import { useSelector } from "react-redux";
import ForecastCard from "./ForecastCard";
import s from "./WeatherTodayList.module.css";

const ForecastList = () => {
  const forecast = useSelector((state) => state.weather.forecast);

  if (!forecast.length) return null;

  return (
    <div className={s.forecastBox}>
      {forecast.slice(0, 6).map((item) => (
        <ForecastCard key={item.dt} item={item} />
      ))}
    </div>
  );
};

export default ForecastList;
