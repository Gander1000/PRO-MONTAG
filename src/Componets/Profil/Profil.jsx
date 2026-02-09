import scss from "./Profil.module.scss";
import Frame from "../../assets/Frame 1.svg";
import Vector from "../../assets/Vector.svg";
import { useState } from "react";

function Profil() {
  const initialInputs = [
    { label: "Название магазина", type: "text", value: "Академия дверей" },
    { label: "ФИО менеджера", type: "text", value: "Иванович Иван Иванов" },
    { label: "Контактный телефон", type: "text", value: "+7 (999) 999 99-99" },
    { label: "Email", type: "email", value: "ivan@gmail.com" },
    { label: "Пароль", type: "text", value: "qwerty123" },
  ];

  const initialAdres = [
    { label: "Город", type: "text", value: "Г. Москва" },
    { label: "Улица", type: "text", value: "ул. Спиридоновка" },
    { label: "Дом", type: "text", value: "25/20с1" },
  ];

  const [inputs, setInputs] = useState(initialInputs);
  const [adres, setAdres] = useState(initialAdres);

  const handleInputChange = (index, e, isAdres = false) => {
    if (isAdres) {
      const newAdres = [...adres];
      newAdres[index].value = e.target.value;
      setAdres(newAdres);
    } else {
      const newInputs = [...inputs];
      newInputs[index].value = e.target.value;
      setInputs(newInputs);
    }
  };

  return (
    <section className={scss.Profil}>
      <div className={scss.top}>
        <img src={Frame} alt="logo" width={98} />
        <h1>
          Академия <br /> дверей
        </h1>
      </div>

      <div className={scss.contai_input}>
        {inputs.map((item, index) => (
          <div className={scss.cart} key={index}>
            <div className={scss.title}>
              <p>{item.label}</p>
              <img src={Vector} alt="" />
            </div>
            <input
              type={item.type}
              value={item.value}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
        ))}
      </div>

      <h1>Адрес магазина</h1>

      <div className={scss.contai_input}>
        {adres.map((item, index) => (
          <div className={scss.cart} key={index}>
            <div className={scss.title}>
              <p>{item.label}</p>
              <img src={Vector} alt="" />
            </div>
            <input
              type={item.type}
              value={item.value}
              onChange={(e) => handleInputChange(index, e, true)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Profil;
