import SearchBox from "../SearchBox/SearchBox";
import s from "./MobileHeader.module.css";
import sprite from "../../assets/icons.svg";

const MobileHeader = () => {
  return (
    <header className={s.header}>
      <svg className={s.iconLogo}>
        <use href={`${sprite}#icon-logo`}></use>
      </svg>

      <SearchBox />
      <svg className={s.iconList}>
        <use href={`${sprite}#icon-list`}></use>
      </svg>
    </header>
  );
};

export default MobileHeader;
