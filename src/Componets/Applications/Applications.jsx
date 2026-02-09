import scss from "./Applications.module.scss";
import Icon from "../../assets/icon.svg";
import Men from "../../assets/Photoroom.svg";
import { Link } from "react-router-dom";
import paper from "../../assets/peper.svg";

function Applications() {
  return (
    <section className={scss.Applications}>
      <div className={scss.contai_top}>
        <div className={scss.container}>
          <h2>Активные заявки</h2>
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
        </div>
        <Link to="/Home_Date/Union">
          <button>Посмотреть все</button>
        </Link>
      </div>
      <div className={scss.contai_bottom}>
        <Link to="">
          <h1>Добавить новую заявку</h1>
          <img className={scss.men} src={Men} alt="" />
        </Link>
        <Link to="">
          <h1>Скачать прайс-лист</h1>
          <img className={scss.peper} src={paper} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default Applications;
