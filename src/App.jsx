import { useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import SearchBox from "./components/SearchBox/SearchBox";
import WeatherAdditList from "./components/WeatherAdditList/WeatherAdditList";
import WeatherDays from "./components/WeatherDays/WeatherDays";
import WeatherTodayList from "./components/WeatherTodayList/WeatherTodayList";
import { fetchData } from "./redux/Operations/SearchOps";
import { useDispatch } from "react-redux";
import "./index.css";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className="heroSection">
      <Navigation />
      <div className="centrInfo">
        <SearchBox />
        <WeatherTodayList />
        <WeatherAdditList />
      </div>
      <WeatherDays />
    </div>
  );
};
export default App;
