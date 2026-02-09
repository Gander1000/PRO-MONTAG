import scss from "./Union.module.scss";
import Icon from "../../assets/icon.svg";
import { Link } from "react-router-dom";

function Union() {
  return (
    <section className={scss.Union}>
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
      </div>
    </section>
  );
}

export default Union;
