import sun from "../assets/Img/sun.png";
import moon from "../assets/Img/moon.png";
import sunClouds from "../assets/Img/sunClouds.png";
import moonClouds from "../assets/Img/moonClouds.png";
import sunRain from "../assets/Img/sunRain.png";
import moonRain from "../assets/Img/moonRain.png";
import thunder from "../assets/Img/thunder.png";

const weatherData = {
  Clear: {
    day: sun,
    night: moon,
    text: "Сонячно",
  },

  Clouds: {
    day: sunClouds,
    night: moonClouds,
    text: "Хмарно",
  },

  Rain: {
    day: sunRain,
    night: moonRain,
    text: "Дощово",
  },

  Thunderstorm: {
    day: thunder,
    night: thunder,
    text: "Гроза",
  },
};

export const getWeatherImage = (condition, isDay) => {
  return weatherData[condition]?.[isDay ? "day" : "night"] || sun;
};
export const getWeatherText = (condition) => {
  return weatherData[condition]?.text || condition;
};
