import s from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={s.navBox}>
      <svg className={s.iconLogo}>
        <use href="/src/assets/icons.svg#icon-logo"></use>
      </svg>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="">
            <svg className={s.icon}>
              <use href="/src/assets/icons.svg#icon-home"></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="">
            <svg className={s.icon}>
              <use href="/src/assets/icons.svg#icon-list"></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="">
            <svg className={s.icon}>
              <use href="/src/assets/icons.svg#icon-maps"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
