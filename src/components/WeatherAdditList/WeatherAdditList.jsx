import { useSelector } from "react-redux";
import Item from "./Item";
import s from "./WeatherAdditList.module.css";
const WeatherAdditList = () => {
  const weather = useSelector((state) => state.weather.current);

  if (!weather) return null;
  console.log(weather);
  const items = [
    {
      title: "Відчувається",
      value: `${weather.main.feels_like.toFixed(0)}°`,
      icon: "icon-degree",
    },
    {
      title: "Вітер",
      value: `${(weather.wind.speed * 3.6).toFixed(0)} км/г`,
      icon: "icon-wind",
    },

    {
      title: "Вологість",
      value: `${weather.main.humidity}%`,
      icon: "icon-humidity",
    },
    {
      title: "Хмарність",
      value: `${weather.clouds.all}%`,
      icon: "icon-cloudy",
    },
    {
      title: "Тиск",
      value: `${weather.main.pressure} hPa`,
      icon: "icon-pressure",
    },
    {
      title: "Захід сонця",
      value: new Date(weather.sys.sunset * 1000).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      icon: "icon-sunset",
    },
  ];
  return (
    <ul className={s.list}>
      {items.map((item) => (
        <Item key={item.title} item={item} />
      ))}
    </ul>
  );
};

export default WeatherAdditList;
