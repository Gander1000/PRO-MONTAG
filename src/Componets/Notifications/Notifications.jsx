import scss from "./Notifications.module.scss";
import { Link } from "react-router-dom";
import Icon from "../../assets/icon.svg";

function Notifications() {
  return (
    <section className={scss.Notifications}>
      <h2>Уведомления по заявкам</h2>
      <Link to="">
        <div className={scss.cart}>
          <img src={Icon} alt="" />
          <div className={scss.title}>
            <div className={scss.red_title}>
              <h4>Ваша заявка №АД00521250 взята в обработку</h4>
            </div>
            <div className={scss.top}>
              <h3>АД00521250</h3>
              <h3>15.01.2026</h3>
            </div>
            <div className={scss.bottom}>
              <h4>Монтаж дверей</h4>
              <span>Ожидает услугу</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Notifications;
