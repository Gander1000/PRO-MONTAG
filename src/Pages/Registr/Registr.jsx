import scss from "./Registr.module.scss";
import Cor from "../../assets/minimalistskii-inter-er-koridora-s-derevannoi-skameikoi-i-zerkalom 1.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Registr = () => {
  const [shopName, setShopName] = useState("");
  const [managerName, setManagerName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  const handleRegister = () => {
    if (
      !shopName.trim() ||
      !managerName.trim() ||
      !contactPhone.trim() ||
      !email.trim() ||
      !password.trim()
    )
      return;

    const newUser = {
      id: Date.now(),
      shopName,
      managerName,
      contactPhone,
      email,
      password,
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("lastUser", JSON.stringify(newUser)); 

    setShopName("");
    setManagerName("");
    setContactPhone("");
    setEmail("");
    setPassword("");

    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const isDisabled =
    !shopName.trim() ||
    !managerName.trim() ||
    !contactPhone.trim() ||
    !email.trim() ||
    !password.trim();

  return (
    <section className={scss.Registr}>
      <div className={scss.contai_image}>
        <img className={scss.Cor} src={Cor} alt="" />
      </div>
      <div className={scss.contai_Title}>
        <div className={scss.Aftoris}>
          <a href="/">Авторизация</a>
        </div>
        <h2>
          Добро пожаловать в службу <br /> <span>сервиса PRO Монтаж.</span>
        </h2>
        <div className={scss.contai_input}>
          <p>Регистрация</p>

          <div className={scss.contai_value}>
            <input
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              type="text"
              placeholder="Название магазина"
            />
          </div>

          <div className={scss.contai_value}>
            <input
              value={managerName}
              onChange={(e) => setManagerName(e.target.value)}
              type="text"
              placeholder="ФИО менеджера"
            />
          </div>

          <div className={scss.contai_value}>
            <input
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              type="tel"
              placeholder="Контактный телефон"
            />
          </div>

          <div className={scss.contai_value}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>

          <div className={scss.contai_value}>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Пароль"
            />
          </div>
        </div>

        <button
          onClick={handleRegister}
          disabled={isDisabled}
          style={{
            cursor: isDisabled ? "not-allowed" : "pointer",
            opacity: isDisabled ? 0.5 : 1,
          }}
        >
          Войти
        </button>
      </div>
    </section>
  );
};

export default Registr;
