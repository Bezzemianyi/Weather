import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../redux/Operations/SearchOps";
import s from "./SearchBox.module.css";
import sprite from "../../assets/icons.svg";

const SearchBox = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city.trim()) return;
    dispatch(fetchData(city));
    setCity("");
  };
  return (
    <form onSubmit={handleSubmit} className={s.searchBox}>
      <svg className={s.icon}>
        <use href={`${sprite}#icon-search`}></use>
      </svg>
      <input
        className={s.input}
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </form>
  );
};

export default SearchBox;
