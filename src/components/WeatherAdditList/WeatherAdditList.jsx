import { useSelector } from "react-redux";

const WeatherAdditList = () => {
  const weather = useSelector((state) => state.weather.current);

  if (!weather) return null;

  return (
    <ul>
      <li>Humidity: {weather.main.humidity}%</li>

      <li>Wind: {weather.wind.speed} km/h</li>

      <li>Pressure: {weather.main.pressure}</li>

      <li>Clouds: {weather.clouds.all}%</li>
    </ul>
  );
};

export default WeatherAdditList;
