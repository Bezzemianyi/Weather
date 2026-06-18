import s from "./WeatherAdditList.module.css";
import sprite from "../../assets/icons.svg";
const Item = ({ item }) => {
  return (
    <li className={s.card}>
      <div className={s.top}>
        <svg className={s.icon}>
          <use href={`${sprite}#${item.icon}`} />
        </svg>

        <span className={s.title}>{item.title}</span>
      </div>

      <p className={s.value}>{item.value}</p>
    </li>
  );
};

export default Item;
