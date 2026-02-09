import scss from "./Search_online.module.scss";
import Icon from "../../assets/icon.svg";
import { Link } from "react-router-dom";
import Search_outline from "../../assets/search-outline.svg";

function Search_online() {
  return (
    <section className={scss.Search_online}>
      <h2>Поиск заявки</h2>
      <div className={scss.input}>
        <input type="text" />
        <img src={Search_outline} alt="" />
      </div>
      <Link to="/Home_Date/Union_Profil">
        <div className={scss.cart}>
          <img src={Icon} alt="" />
          <div className={scss.title}>
            <div className={scss.top}>
              <h3>АД00521250</h3>
              <h3>15.01.2026</h3>
            </div>
            <div className={scss.bottom}>
              <h4>Монтаж дверей</h4>
              <span>Ожидает звонок</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Search_online;
