import { useSelector } from "react-redux";

const WeatherTodayList = () => {
  const weather = useSelector((state) => state.weather.current);

  if (!weather) return null;

  return (
    <div>
      <h1>{weather.name}</h1>

      <h2>{weather.main.temp}</h2>

      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default WeatherTodayList;
