import scss from "./Document_text.module.scss";
import { Link } from "react-router-dom";
import { ITEM } from "../../bd";

function Document_text() {
  const services = ITEM[0].services;
  const downloadText = ITEM[0].downloadText;

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
