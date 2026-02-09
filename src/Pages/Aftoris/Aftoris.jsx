import scss from "./Aftoris.module.scss";
import Logo from "../../assets/Group.svg";
import Cor from "../../assets/minimalistskii-inter-er-koridora-s-derevannoi-skameikoi-i-zerkalom 1.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Aftoris = () => {
  const [emeil, setEleil] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={scss.Aftoris}>
      <div className={scss.contai_image}>
        <img className={scss.logo} src={Logo} alt="" width={60} />
        <img className={scss.Cor} src={Cor} alt="" />
      </div>
      <div className={scss.contai_Title}>
        <div className={scss.Registr}>
          <img src={Logo} alt="" />
          <Link to="/Registr">
            Регистрация
          </Link>
        </div>
        <h2>
          Добро пожаловать в службу <br /> <span>сервиса PRO Монтаж.</span>
        </h2>
        <div className={scss.contai_input}>
          <p>Авторизация</p>
          <input
            value={emeil}
            onChange={(e) => setEleil(e.target.value)}
            type="email"
            placeholder="Логин"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Пароль"
          />
        </div>
        <Link to="/Home_Date/Profil_Date">
          <button>Войти</button>
        </Link>
      </div>
    </section>
  );
};

export default Aftoris;
