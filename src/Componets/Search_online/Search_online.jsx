import { useState, useEffect } from "react";
import scss from "./Search_online.module.scss";
import Icon from "../../assets/icon.svg";
import { Link } from "react-router-dom";
import Search_outline from "../../assets/search-outline.svg";
import { ITEM } from "../../bd";

function Search_online() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={scss.Search_online}>
      {" "}
      <h2>Поиск заявки</h2>
      <div className={scss.input}>
        <input type="text" />
        <img src={Search_outline} alt="" />
      </div>
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
    </section>
  );
}

export default Search_online;
