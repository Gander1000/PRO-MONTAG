import { useState, useEffect } from "react";
import scss from "./Notifications.module.scss";
import { Link } from "react-router-dom";
import Icon from "../../assets/icon.svg";
import { ITEM } from "../../bd";

function Notifications() {
  const [loading, setLoading] = useState(true);
  const notifications = ITEM[0].notifications;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={scss.Notifications}>
      <h2>Уведомления по заявкам</h2>

      {loading
        ? Array(5)
            .fill(0)
            .map((_, index) => (
              <div className={scss.skeleton_cart} key={index}>
                <div className={scss.skeleton_icon}></div>
                <div className={scss.skeleton_text}>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            ))
        : notifications.map((item) => (
            <Link to="/Home_Date/Union_Profil" key={item.id}>
              <div className={scss.cart}>
                <img src={Icon} alt="" />

                <div className={scss.title}>
                  <div className={scss.red_title}>
                    <h4>{item.redText}</h4>
                  </div>

                  <div className={scss.top}>
                    <h3>{item.number}</h3>
                    <h3>{item.date}</h3>
                  </div>

                  <div className={scss.bottom}>
                    <h4>{item.title}</h4>
                    <span>{item.status}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
    </section>
  );
}

export default Notifications;
