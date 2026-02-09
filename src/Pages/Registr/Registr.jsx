import scss from "./Registr.module.scss";
import Logo from "../../assets/Group.svg";
import Cor from "../../assets/minimalistskii-inter-er-koridora-s-derevannoi-skameikoi-i-zerkalom 1.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Registr = () => {
  const [emeil, setEleil] = useState("");
  const [password, setPassword] = useState("");
  const [namestor, setNamestor] = useState("");
  const [managers_name, setManagers_name] = useState("");
  const [contact_phone, setContact_phone] = useState("");

  return (
    <section className={scss.Registr}>
      <div className={scss.contai_image}>
        <img className={scss.logo} src={Logo} alt="" width={60} />
        <img className={scss.Cor} src={Cor} alt="" />
      </div>
      <div className={scss.contai_Title}>
        <div className={scss.Aftoris}>
          <img src={Logo} alt="" />
          <Link to="/">Авторизация</Link>
        </div>
        <h2>
          Добро пожаловать в службу <br /> <span>сервиса PRO Монтаж.</span>
        </h2>
        <div className={scss.contai_input}>
          <p>Регистрация</p>
          <input
            value={contact_phone}
            onChange={(e) => setContact_phone(e.target.value)}
            type="text"
            placeholder="Контактный телефон"
          />
          <input
            value={managers_name}
            onChange={(e) => setManagers_name(e.target.value)}
            type="text"
            placeholder="ФИО менеджера"
          />
          <input
            value={namestor}
            onChange={(e) => setNamestor(e.target.value)}
            type="text"
            placeholder="Название магазина"
          />
          <input
            value={emeil}
            onChange={(e) => setEleil(e.target.value)}
            type="Emeil"
            placeholder="Email"
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

export default Registr;
