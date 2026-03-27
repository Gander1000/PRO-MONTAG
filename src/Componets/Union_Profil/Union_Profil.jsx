import scss from "./Union_Profil.module.scss";
import Arrow from "../../assets/arrow-back-outline.svg";
import Person from "../../assets/person-outline.svg";
import Call from "../../assets/call-outline.svg";
import document from "../../assets/documents-outline.svg";
import { Link } from "react-router-dom";
import { ITEM } from "../../bd";
import { useState, useRef } from "react";

function Union_Profil() {
  const data = ITEM[0].unionProfil;

  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFolderSelect = (e) => {
    const filesArray = Array.from(e.target.files);
    const names = filesArray.map((f) => f.name);
    setSelectedFiles((prev) => [...prev, ...names]);
  };

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
                {data.orderNumber}
                <span>{data.orderInfo}</span>
              </h1>
              <div className={scss.contai_p}>
                <p>
                  <img src={Person} alt="" />
                  {data.client.name}
                </p>
                <p>
                  <img src={Call} alt="" />
                  {data.client.phone}
                </p>
              </div>
            </div>

            <div className={scss.contai_dan}>
              <h2 className={scss.montag}>
                Тип заявки<span>{data.address.type}</span>
              </h2>
              <h2>
                Город<span>{data.address.city}</span>
              </h2>
              <h2>
                Улица<span>{data.address.street}</span>
              </h2>
              <h2>
                Дом<span>{data.address.house}</span>
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
                      {data.manager.name}
                    </p>
                    <p>
                      <img src={Call} alt="" />
                      {data.manager.phone}
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
                      {data.specialist.name}
                    </p>
                  </div>
                </div>
              </div>

              <div className={scss.contai_date}>
                <h2>
                  Статус заявки
                  <span className={scss.uslug}>{data.status}</span>
                </h2>
                <h2>
                  Дата заявки<span>{data.orderDate}</span>
                </h2>
                <h2>
                  Дата назначения работ<span>{data.workDate}</span>
                </h2>
              </div>
            </div>

            <div className={scss.bottom_input}>
              <h1>Комментарий</h1>
              <input type="text" placeholder={data.commentPlaceholder} />
            </div>
          </div>
        </div>

        <div className={scss.contai_buttom}>
          <div className={scss.bottom_left}>
            <h1>Файлы, прикрепленные менеджером</h1>
            <a href="">
              <img src={document} alt="" />
              {data.downloadAllText}
            </a>
            <div className={scss.contai_fail}>
              {data.managerFiles.map((file, i) => (
                <a key={i} href="">
                  {file}
                </a>
              ))}
            </div>

            <h1>Файлы, прикрепленные магазином</h1>
            <a href="">
              <img src={document} alt="" />
              {data.downloadAllText}
            </a>
            <div className={scss.contai_fail}>
              {data.shopFiles.map((file, i) => (
                <a key={i} href="">
                  {file}
                </a>
              ))}
            </div>
          </div>

          <div
            className={scss.bottom_rght}
            onClick={() => fileInputRef.current.click()}
          >
            <h1>{data.uploadText}</h1>

            {selectedFiles.length > 0 && (
              <div className={scss.selectedFiles}>
                <ul>
                  {selectedFiles.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            webkitdirectory=""
            directory=""
            multiple
            style={{ display: "none" }}
            onChange={handleFolderSelect}
          />
        </div>
      </div>
    </section>
  );
}

export default Union_Profil;
