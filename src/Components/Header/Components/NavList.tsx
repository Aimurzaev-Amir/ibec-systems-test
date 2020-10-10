import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Header.scss";
import { FirstNavList } from "./FirtstNavList";

interface IToggle {
  toggle: boolean;
  mobile: boolean;
  changeMenuState(): void;
  dontChangeState(): void;
}

export const NavList: React.FC<IToggle> = (props) => {
  const [openFirst, setOpenFirst] = useState<boolean>(false);
  const openFirstSubMenu = (): void => {
    setOpenFirst(!openFirst);
  };
  return (
    <ul className={props.toggle ? "navList showMenu" : "navList hideMenu"}>
      {props.toggle && (
        <li className="mobileMenuHeader">
          <div className="mobileMenuLogo"></div>
          <div className="mobileMenuTitle">My Account</div>
        </li>
      )}
      <li className="navItem">
        <NavLink
          to={"/"}
          className="navItemLink"
          onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
        >
          Главная
        </NavLink>
      </li>
      <li
        className="navItem"
        onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
      >
        <NavLink to={"/about"} className="navItemLink">
          О нас
        </NavLink>
      </li>
      <li className="navItem">
        <p onClick={openFirstSubMenu} className="navItemSubMenu">
          Платежи
        </p>
        <FirstNavList
          openFirst={openFirst}
          mobile={props.mobile}
          openFirstSubMenu={openFirstSubMenu}
          changeMenuState={props.changeMenuState}
          dontChangeState={props.dontChangeState}
        />
      </li>
      <li className="navItem">
        <NavLink
          to={"/exchange"}
          className="navItemLink"
          onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
        >
          Купля/продажа валюты
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink
          to={"/translations"}
          className="navItemLink"
          onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
        >
          Переводы
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink
          to={"/applications"}
          className="navItemLink"
          onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
        >
          Заявки
        </NavLink>
      </li>
      <li className="navItem">
        <NavLink
          to={"/contacts"}
          className="navItemLink"
          onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
        >
          Наши контакты
        </NavLink>
      </li>
    </ul>
  );
};
