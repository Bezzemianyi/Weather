import { useSelector } from "react-redux";
import s from "./WeatherTodayList.module.css";
import sun from "../../assets/Img/sun.png";
import moon from "../../assets/Img/moon.png";
import sunClouds from "../../assets/Img/sunClouds.png";
import moonClouds from "../../assets/Img/moonClouds.png";
import sunRain from "../../assets/Img/sunRain.png";
import moonRain from "../../assets/Img/moonRain.png";
import thunder from "../../assets/Img/thunder.png";

const WeatherTodayList = () => {
  const weather = useSelector((state) => state.weather.current);

  if (!weather) return null;
  // console.log(weather.weather[0].main);
  // console.log(weather.weather[0].description);
  // console.log(weather.sys.sunrise);
  // console.log(weather.sys.sunset);
  // console.log(weather.dt);

  const weatherImages = {
    Clear: {
      day: sun,
      night: moon,
    },
    Clouds: {
      day: sunClouds,
      night: moonClouds,
    },
    Rain: {
      day: sunRain,
      night: moonRain,
    },
    Thunderstorm: {
      day: thunder,
      night: thunder,
    },
  };
  const condition = weather.weather[0].main;

  const isDay =
    weather.dt >= weather.sys.sunrise && weather.dt < weather.sys.sunset;
  const image = weatherImages[condition]?.[isDay ? "day" : "night"] || sun;
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
