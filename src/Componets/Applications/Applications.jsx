import { useState, useEffect } from "react";
import scss from "./Applications.module.scss";
import Icon from "../../assets/icon.svg";
import Men from "../../assets/Photoroom.svg";
import { Link } from "react-router-dom";
import paper from "../../assets/peper.svg";
import { ITEM } from "../../bd";

function Applications() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className={scss.Applications}>
      <div className={scss.contai_top}>
        <div className={scss.container}>
          <h2>Активные заявки</h2>

          {loading
            ? Array(2)
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
            : ITEM[0].orders.map((item) => (
                <Link to="/Home_Date/Union_Profil" key={item.id}>
                  <div className={scss.cart}>
                    <img src={Icon} alt="" />

                    <div className={scss.title}>
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
        </div>

        <Link to="/Home_Date/Union">
          <button>Посмотреть все</button>
        </Link>
      </div>

      <div className={scss.contai_bottom}>
        <Link to="/Home_Date/Add_online">
          <h1>Добавить новую заявку</h1>
          <img className={scss.men} src={Men} alt="" />
        </Link>

        <Link to="/Home_Date/Document_text">
          <h1>Скачать прайс-лист</h1>
          <img className={scss.peper} src={paper} alt="" />
        </Link>
      </div>
    </section>
  );
}

export default Applications;
