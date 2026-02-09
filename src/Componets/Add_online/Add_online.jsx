import scss from "./Add_online.module.scss";
import Arrow from "../../assets/arrow-back-outline.svg";
import Arrow_rght from "../../assets/arrow-back.svg";
import { Link } from "react-router-dom";
import Person from "../../assets/person-outline.svg";
import Call from "../../assets/call-outline.svg";
import Vector from "../../assets/Vector.svg";
import { useState } from "react";

function Add_outLine() {
  const initialInputs = [
    { label: "Тип заявки", type: "text", value: "Монтаж" },
    { label: "Город", type: "text", value: "Г. Москва" },
    { label: "Улица", type: "text", value: "ул. Спиридоновка" },
    { label: "Дом", type: "text", value: "25/20с1" },
  ];

  const [inputs, setInputs] = useState(initialInputs);
  const [comment, setComment] = useState("");

  const handleInputChange = (index, e) => {
    const newInputs = [...inputs];
    newInputs[index].value = e.target.value;
    setInputs(newInputs);
  };

  const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay() || 7;

  const days = [];
  for (let i = 1; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  const handleDayClick = (date) => {
    if (!startDate || endDate) {
      setStartDate(date);
      setEndDate(null);
    } else if (date >= startDate) {
      setEndDate(date);
    }
  };

  const isInRange = (date) => {
    if (!startDate || !endDate) return false;
    return date >= startDate && date <= endDate;
  };

  return (
    <section className={scss.Add_outLine}>
      <div className={scss.container}>
        <Link to="/Home_Date/Union" className={scss.back}>
          <img src={Arrow} alt="" width={20} />К заявкам
        </Link>

        <div className={scss.contai_top}>
          <div className={scss.title}>
            <div className={scss.top_title}>
              <h1>
                АД00521250<span>Информация о заказе</span>
              </h1>
              <div className={scss.contai_p}>
                <p>
                  <img src={Person} alt="" />
                  Иванович Иван Иванов
                </p>
                <p>
                  <img src={Call} alt="" />
                  +7 (999) 999-99-99
                </p>
              </div>
            </div>

            <div className={scss.contai_input}>
              {inputs.map((item, index) => (
                <div
                  key={index}
                  className={`${scss.cart} ${index === 0 ? scss.first : ""}`}
                >
                  <div className={scss.title_input}>
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
          </div>

          <div className={scss.title_rght}>
            <div className={scss.input}>
              <h2>
                Комментарий
                <img src={Vector} alt="" />
              </h2>
              <div className={scss.cart}>
                <input
                  type="text"
                  placeholder="Введите комментарий"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </div>
            </div>

            <div className={scss.calendar}>
              <div className={scss.top_calendar}>
                <h2>
                  Дата выполнения
                  <img src={Vector} alt="" />
                </h2>
                <span>15.01.2026 - 22.01.2026</span>
              </div>
              <div className={scss.header}>
                <h2>{currentDate.toLocaleString("ru", { month: "long" })}</h2>
                <div className={scss.contai_button}>
                  <button
                    onClick={() => setCurrentDate(new Date(year, month - 1))}
                  >
                    <img src={Arrow} alt="" />
                  </button>
                  <button
                    onClick={() => setCurrentDate(new Date(year, month + 1))}
                  >
                    <img src={Arrow_rght} alt="" />
                  </button>
                </div>
              </div>

              <div className={scss.week}>
                {weekDays.map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>

              <div className={scss.days}>
                {days.map((date, i) =>
                  date ? (
                    <div
                      key={i}
                      onClick={() => handleDayClick(date)}
                      className={`${scss.day}
                        ${
                          date.getDay() === 0 || date.getDay() === 6
                            ? scss.weekend
                            : ""
                        }
                        ${isInRange(date) ? scss.range : ""}
                      `}
                    >
                      {date.getDate()}
                    </div>
                  ) : (
                    <div key={i} className={scss.empty} />
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={scss.contai_bottom}>
          <div className={scss.bloc}>
            <p>Добавьте файл загрузив по клику или перетащив его в область</p>
          </div>
          <button>Создать заявку</button>
        </div>
      </div>
    </section>
  );
}

export default Add_outLine;
