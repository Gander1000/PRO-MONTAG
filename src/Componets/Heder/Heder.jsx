import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import scss from "./Heder.module.scss";
import Logo from "../../assets/Group.svg";
import Resting from "../../assets/Resting.svg";
import Resting_red from "../../assets/Resting_Red.svg";
import Union from "../../assets/Union.svg";
import Union_red from "../../assets/Union_Red.svg";
import Add_outLine from "../../assets/add-outline.svg";
import Add_outLine_Red from "../../assets/add-outline_red.svg";
import Document_text_outline from "../../assets/document-text-outline.svg";
import Document_text_outline_red from "../../assets/document-text-outline-red.svg";
import Search_outline from "../../assets/search-outline.svg";
import Search_outline_red from "../../assets/search-outline-red.svg";
import Notifications_outline from "../../assets/notifications-outline.svg";
import Notifications_outline_red from "../../assets/notifications-outline-red.svg";
import Exit from "../../assets/iconamoon_exit-thin.svg";

const items = [
  { to: "/Home_Date/Profil_Date", icon: Resting, activeIcon: Resting_red },
  { to: "/Home_Date/Union", icon: Union, activeIcon: Union_red },
  {
    to: "/Home_Date/Add_online",
    icon: Add_outLine,
    activeIcon: Add_outLine_Red,
  },
  {
    to: "/Home_Date/Document_text",
    icon: Document_text_outline,
    activeIcon: Document_text_outline_red,
  },
  {
    to: "/Home_Date/Sesrch_online",
    icon: Search_outline,
    activeIcon: Search_outline_red,
  },
  {
    to: "/Home_Date/Notifications",
    icon: Notifications_outline,
    activeIcon: Notifications_outline_red,
  },
];

const items_mob = [
  { to: "/Home_Date/Profil_Date", icon: Resting, activeIcon: Resting_red },
  { to: "/Home_Date/Union", icon: Union, activeIcon: Union_red },
  {
    to: "/Home_Date/Add_online",
    icon: Add_outLine,
    activeIcon: Add_outLine_Red,
  },
  {
    to: "/Home_Date/Document_text",
    icon: Document_text_outline,
    activeIcon: Document_text_outline_red,
  },
  {
    to: "/Home_Date/Sesrch_online",
    icon: Search_outline,
    activeIcon: Search_outline_red,
  },
];

const Heder = () => {
  const location = useLocation();
  const activeIndex = items.findIndex(
    (item) => item.to && location.pathname.startsWith(item.to),
  );


  const [notificationsCount, setNotificationsCount] = useState(3); 

  const handleNotificationClick = () => {
    setNotificationsCount(0); 
  };

  return (
    <section className={scss.Heder}>
      <div className={scss.container}>
        <img src={Logo} alt="Logo" width={40} />

        {items.map((item, index) => (
          <Link
            to={item.to || "#"}
            key={index}
            onClick={
              item.to.includes("Notifications")
                ? handleNotificationClick
                : undefined
            }
          >
            <div
              className={`${scss.RestingContainer} ${activeIndex === index ? scss.active : ""}`}
            >
              <img
                className={scss.Resting}
                src={activeIndex === index ? item.activeIcon : item.icon}
                alt="User"
                width={24}
              />
              {item.to.includes("Notifications") && notificationsCount > 0 && (
                <span className={scss.badge}>{notificationsCount}</span>
              )}
            </div>
          </Link>
        ))}

        <Link className={scss.Exit} to="/">
          <img src={Exit} alt="" />
        </Link>
      </div>
      
      <div className={scss.mob_menu}>
        <div className={scss.contai_top}>
          <img className={scss.logo} src={Logo} alt="" />
          <div className={scss.contai_exit}>
            <Link
              to="/Home_Date/Notifications"
              onClick={handleNotificationClick}
              style={{ position: "relative" }}
            >
              <img src={Notifications_outline} alt="" />
              {notificationsCount > 0 && (
                <span className={scss.badge}>{notificationsCount}</span>
              )}
            </Link>
            <Link to="/">
              <img src={Exit} alt="" />
            </Link>
          </div>
        </div>

        <div className={scss.contai_bottom}>
          {items_mob.map((item, index) => (
            <Link to={item.to || "#"} key={index}>
              <img
                className={scss.Resting}
                src={activeIndex === index ? item.activeIcon : item.icon}
                alt="User"
                width={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Heder;
