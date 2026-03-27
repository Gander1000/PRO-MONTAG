import scss from "./Aftoris.module.scss";
import Cor from "../../assets/minimalistskii-inter-er-koridora-s-derevannoi-skameikoi-i-zerkalom 1.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Aftoris = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : [];
  });

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) return;

    
    const user = users.find(
      (u) => u.email === email && u.password === password,
    );
    if (!user) {
      alert("Неверный логин или пароль");
      return;
    }

    localStorage.setItem("lastUser", JSON.stringify(user)); 

    setEmail("");
    setPassword("");
    navigate("/Home_Date/Profil_Date");
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const isDisabled = !email.trim() || !password.trim();

  return (
    <section className={scss.Aftoris}>
      <div className={scss.contai_image}>
        <img className={scss.Cor} src={Cor} alt="" />
      </div>
      <div className={scss.contai_Title}>
        <div className={scss.Registr}>
          <Link to="/Registr">Регистрация</Link>
        </div>
        <h2>
          Добро пожаловать в службу <br /> <span>сервиса PRO Монтаж.</span>
        </h2>
        <div className={scss.contai_input}>
          <p>Авторизация</p>
          <div className={scss.contai_value}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Логин"
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
          onClick={handleLogin}
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

export default Aftoris;
