import s from "./Navigation.module.css";
import sprite from "../../assets/icons.svg";
const Navigation = () => {
  return (
    <div className={s.navBox}>
      <svg className={s.iconLogo}>
        <use href={`${sprite}#icon-logo`}></use>
      </svg>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="">
            <svg className={s.icon}>
              <use href={`${sprite}#icon-home`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="">
            <svg className={s.icon}>
              <use href={`${sprite}#icon-list`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="">
            <svg className={s.icon}>
              <use href={`${sprite}#icon-maps`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
