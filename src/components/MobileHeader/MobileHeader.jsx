import SearchBox from "../SearchBox/SearchBox";
import s from "./MobileHeader.module.css";
const MobileHeader = () => {
  return (
    <header className={s.header}>
      <svg className={s.iconLogo}>
        <use href="/src/assets/icons.svg#icon-logo"></use>
      </svg>

      <SearchBox />
      <svg className={s.iconList}>
        <use href="/src/assets/icons.svg#icon-list"></use>
      </svg>
    </header>
  );
};

export default MobileHeader;
