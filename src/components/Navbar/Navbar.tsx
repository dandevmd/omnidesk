import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav_links">
        <p className="nav_link">Омнипанель</p>
        <p className="nav_link">Каналы</p>
        <p className="nav_link">Команда</p>
        <p className="nav_link">Центр поддержки</p>
        <p className="nav_link">Статистика</p>
        <p className="nav_link">Настройки</p>
        <p className="nav_link">Оплата услуг</p>
      </div>
      <div className="nav_info">
        <div className="nav_info_item">
          <i className="fa-solid fa-question" />
        </div>{" "}
        <div className="nav_info_item">
          <i className="fa-solid fa-user" />{" "}
        </div>{" "}
        <div className="nav_info_item_icon">
          <div className="user_logo" />
          <i className="fa-solid fa-caret-down" />{" "}
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
