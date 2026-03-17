import scss from "./Profil.module.scss";
import Vector from "../../assets/Vector.svg";
import { useState, useEffect } from "react";

function Profil() {
  
  const savedUser = JSON.parse(localStorage.getItem("lastUser")) || {};

  const initialInputs = [
    {
      label: "Название магазина",
      type: "text",
      value: savedUser.shopName || "",
    },
    {
      label: "ФИО менеджера",
      type: "text",
      value: savedUser.managerName || "",
    },
    {
      label: "Контактный телефон",
      type: "text",
      value: savedUser.contactPhone || "",
    },
    { label: "Email", type: "text", value: savedUser.email || "" },
  ];

  const initialAdres = [
    { label: "Город", type: "text", value: savedUser.city || "" },
    { label: "Улица", type: "text", value: savedUser.street || "" },
    { label: "Дом", type: "text", value: savedUser.house || "" },
  ];

  const [inputs, setInputs] = useState(initialInputs);
  const [adres, setAdres] = useState(initialAdres);

  
  const handleChange = (index, e) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);

    const updatedUser = { ...savedUser };
    switch (index) {
      case 0:
        updatedUser.shopName = e.target.value;
        break;
      case 1:
        updatedUser.managerName = e.target.value;
        break;
      case 2:
        updatedUser.contactPhone = e.target.value;
        break;
      case 3:
        updatedUser.email = e.target.value;
        break;
    }
    localStorage.setItem("lastUser", JSON.stringify(updatedUser));
  };

  
  const handleAdresChange = (index, e) => {
    const newAdres = [...adres];
    newAdres[index].value = e.target.value;
    setAdres(newAdres);

    const updatedUser = { ...savedUser };
    switch (index) {
      case 0:
        updatedUser.city = e.target.value;
        break;
      case 1:
        updatedUser.street = e.target.value;
        break;
      case 2:
        updatedUser.house = e.target.value;
        break;
    }
    localStorage.setItem("lastUser", JSON.stringify(updatedUser));
  };

  
  useEffect(() => {
    const handleStorage = () => {
      const updatedUser = JSON.parse(localStorage.getItem("lastUser")) || {};
      setInputs([
        {
          label: "Название магазина",
          type: "text",
          value: updatedUser.shopName || "",
        },
        {
          label: "ФИО менеджера",
          type: "text",
          value: updatedUser.managerName || "",
        },
        {
          label: "Контактный телефон",
          type: "text",
          value: updatedUser.contactPhone || "",
        },
        { label: "Email", type: "text", value: updatedUser.email || "" },
      ]);
      setAdres([
        { label: "Город", type: "text", value: updatedUser.city || "" },
        { label: "Улица", type: "text", value: updatedUser.street || "" },
        { label: "Дом", type: "text", value: updatedUser.house || "" },
      ]);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <section className={scss.Profil}>
      <div className={scss.top}>
        <div className={scss.Frame}>
          <h1>{savedUser.shopName?.[0] || "М"}</h1>
        </div>
        <h1>{savedUser.shopName || "МА"}</h1>
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
              value={item.value || ""}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
        ))}
      </div>

      <h2>Адрес магазина</h2>

      <div className={scss.contai_input}>
        {adres.map((item, index) => (
          <div className={scss.cart} key={index}>
            <div className={scss.title}>
              <p>{item.label}</p>
              <img src={Vector} alt="" />
            </div>
            <input
              type={item.type}
              value={item.value || ""}
              onChange={(e) => handleAdresChange(index, e)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Profil;
