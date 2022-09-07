import { NavLink } from "react-router-dom";
import "./SideMenu.scss";

const SideMenu = () => {
  return (
    <div className="menu_container">
      <header className="menu_title">ПРОФИЛЬ АДМИНИСТРАТОРА </header>
      <div className="menu_routes">
        <div className="the_line" />
        <NavLink
          to="/data"
          className={({ isActive }) =>
            isActive ? "menu_item active_item" : "menu_item"
          }
        >
          <i className="fa-solid fa-user"></i>
          <p className="menu_item_title">Основные данные</p>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu_item active_item" : "menu_item"
          }
        >
          <i className="fa-solid fa-user-shield"></i>
          <p className="menu_item_title">2FA</p>
        </NavLink>
        <NavLink
          to="/password"
          className={({ isActive }) =>
            isActive ? "menu_item active_item" : "menu_item"
          }
        >
          <i className="fa-solid fa-lock"></i>
          <p className="menu_item_title">Смена пароля</p>
        </NavLink>
      </div>
    </div>
  );
};

export default SideMenu;
