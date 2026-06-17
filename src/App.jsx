import { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import SearchBox from "./components/SearchBox/SearchBox";
import WeatherAdditList from "./components/WeatherAdditList/WeatherAdditList";
import WeatherDays from "./components/WeatherDays/WeatherDays";
import WeatherTodayList from "./components/WeatherTodayList/WeatherTodayList";
import { fetchData } from "./redux/Operations/SearchOps";
import { useDispatch } from "react-redux";
import "./index.css";
import ForecastList from "./components/WeatherTodayList/ForecastList";
import MobileHeader from "./components/MobileHeader/MobileHeader";
const App = () => {
  const dispatch = useDispatch();
  const isMobile = window.innerWidth < 768;
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  console.log(window.innerWidth);
  console.log(isMobile);
  return (
    <div className="heroSection">
      {isMobile ? <MobileHeader /> : <Navigation />}

      <div className="centrInfo">
        {!isMobile && <SearchBox />}

        <WeatherTodayList />
        <ForecastList />
        <WeatherAdditList />
      </div>

      <WeatherDays />
    </div>
  );
};
export default App;
