import React from "react";
import Logo from "../img/LOGO.png";
import style from "./style.module.css";
import { MENU_ITEMS } from "../../constants";

const Menu = () => {
  return (
    <>
      <nav>
        <div className={style.menu}>
          <div className={style.logo}>
            <img src={Logo} alt="Logo Turistando" />
          </div>
          <div className={style.divBusca}>
            <input
              type="text"
              className={style.txtBusca}
              placeholder="Buscar"
            />
          </div>
          <ul className={style.menuList}>
            <li>{MENU_ITEMS.HOME.toUpperCase()}</li>
            <li>{MENU_ITEMS.ATTRACTIONS.toUpperCase()}</li>
            <li>{MENU_ITEMS.CONTATO.toUpperCase()}</li>
            <li>{MENU_ITEMS.COASTLINE.toUpperCase()}</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
