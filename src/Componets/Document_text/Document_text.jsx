import scss from "./Document_text.module.scss";
import { Link } from "react-router-dom";

function Document_text() {
  const services = [
    {
      title: "Установка дверей стоимостью эконом класса до 2000р",
      price: 2000,
    },
    { title: "Установка двери МДФ", price: 1800 },
    { title: "Установка деревянных дверей", price: 1800 },
    { title: "Двери эмаль, телескоп и стоимостью от 8000р", price: 2500 },
    {
      title: "Установка двери (от 2-х шт) телескоп стоимостью от 2000руб.",
      price: 2200,
    },
    {
      title: "Установка одной двери на объекте (минимальный выезд)",
      price: 3600,
    },
    { title: "Установка распашной двустворчатой двери", price: 4000 },
    {
      title:
        "Установка распашной двустворчатой двери телескоп, эмаль и стоимостью от 8000руб.",
      price: 4500,
    },
    { title: 'Установка двери "книжка"', price: 4000 },
    { title: 'Установка двустворчатой двери "книжка"', price: 8000 },
    { title: "Установка шпонированной двери", price: 2200 },
    {
      title:
        'Установка двери с компланарной коробкой (от 2-х шт) "Silvia" на клей',
      price: 3500,
    },
    { title: "Установка дверей экошпон", price: 2200 },
    { title: "Установка дверей книжка", price: 3000 },
    { title: "Установка стеклянных дверей", price: 2500 },
    {
      title:
        "Установка двери из массива ценных пород дерева (бук, дуб и т. д.)",
      price: 3500,
    },
    { title: "Установка откатных дверей", price: 2500 },
    { title: "Установка дверей гармошка", price: 1800 },
  ];

  return (
    <section className={scss.Document_text}>
      <Link to="" className={scss.top_button}>
        <button>Скачать прайс лист</button>
      </Link>
      <div className={scss.container}>
        {services.map((item, index) => {
          const isGray = index % 2 !== 0; 

          return (
            <div
              className={`${scss.cart} ${isGray ? scss.white : scss.gray}`}
              key={index}
            >
              <h2>
                {item.title}
                <span>{item.price}</span>
              </h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Document_text;
