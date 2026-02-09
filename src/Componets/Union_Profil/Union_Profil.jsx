import scss from "./Union_Profil.module.scss";
import Arrow from "../../assets/arrow-back-outline.svg";
import Person from "../../assets/person-outline.svg";
import Call from "../../assets/call-outline.svg";
import { Link } from "react-router-dom";
import document from "../../assets/documents-outline.svg";

function Union_Profil() {
  return (
    <section className={scss.Union_Profil}>
      <div className={scss.container}>
        <Link to="/Home_Date/Union">
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
                  +7 (999) 999 99-99
                </p>
              </div>
            </div>
            <div className={scss.contai_dan}>
              <h2 className={scss.montag}>
                Тип заявки<span>Монтаж</span>
              </h2>
              <h2>
                Город<span>Г. Москва</span>
              </h2>
              <h2>
                Улица<span>ул. Спиридоновка</span>
              </h2>
              <h2>
                Дом<span>25/20с1</span>
              </h2>
            </div>
          </div>
          <div className={scss.title_rght}>
            <div className={scss.top_dan}>
              <div className={scss.contai_mes}>
                <div className={scss.contai_dan}>
                  <h2>Менеджер</h2>
                  <div className={scss.contai_p}>
                    <p>
                      <img src={Person} alt="" />
                      Петрова Мария Петровна
                    </p>
                    <p>
                      <img src={Call} alt="" />
                      +7 (999) 999 99-99
                    </p>
                  </div>
                </div>
                <div className={scss.contai_dan}>
                  <h2>
                    Специалист <br /> по монтажу
                  </h2>
                  <div className={scss.contai_p}>
                    <p>
                      <img src={Person} alt="" />
                      Петров Павел Петрович
                    </p>
                  </div>
                </div>
              </div>
              <div className={scss.contai_date}>
                <h2>
                  Статус заявки
                  <span className={scss.uslug}>Ожидает услугу</span>
                </h2>
                <h2>
                  Дата заявки<span>25.12.2026</span>
                </h2>
                <h2>
                  Дата назначения работ<span>15.01.2026</span>
                </h2>
              </div>
            </div>
            <div className={scss.bottom_input}>
              <h1>Комментарий</h1>
              <input
                type="text"
                placeholder="Изначальный комментарий, который оставил магазин при создании заявки"
              />
            </div>
          </div>
        </div>
        <div className={scss.contai_buttom}>
          <div className={scss.bottom_left}>
            <h1>Файлы, прикрепленные менеджером</h1>
            <a href="">
              <img src={document} alt="" />
              Скачать все файлы
            </a>
            <div className={scss.contai_fail}>
              <a href="">Прайс.docx</a>
              <a href="">Прайс1.docx</a>
              <a href="">Прайс2.docx</a>
            </div>
            <h1>Файлы, прикрепленные магазином</h1>
            <a href="">
              <img src={document} alt="" />
              Скачать все файлы
            </a>
            <div className={scss.contai_fail}>
              <a href="">Замеры.docx</a>
              <a href="">Замеры1.docx</a>
              <a href="">Замеры2.docx</a>
            </div>
          </div>
          <div className={scss.bottom_rght}>
            <h1>Добавьте файл загрузив по клику или перетащив его в область</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Union_Profil;
