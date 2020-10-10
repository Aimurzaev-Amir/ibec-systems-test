import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Header.scss";
import { SecondNavList } from "./SecondNavList";

interface IMenuProps {
  mobile: boolean;
  openFirst: boolean;
  openFirstSubMenu(): void;
  changeMenuState(): void;
  dontChangeState(): void;
}

export const FirstNavList: React.FC<IMenuProps> = (props) => {
  const [openSecond, setOpenSecond] = useState<boolean>(false);
  const OpenSecondMenu = (): void => {
    setOpenSecond(!openSecond);
  };

  return (
    <ul
      className={
        props.openFirst && props.mobile
          ? "menuDropDownList firstMenu show"
          : "menuDropDownList firstMenu"
      }
    >
      {props.openFirst && props.mobile && (
        <li className="dropDownItem" onClick={props.openFirstSubMenu}>
          <p className="dropDownItemSubMenu">Назад</p>
        </li>
      )}
      <li className="dropDownItem">
        <NavLink
          to={"/payments/inside-bank-to-you"}
          className="dropDownItemLink firstMenuItemLink"
          onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
        >
          На свой счет внутри банка
        </NavLink>
      </li>
      <li className="dropDownItem">
        <p className="dropDownItemSubMenu" onClick={OpenSecondMenu}>
          На чужой счет внутри банка
        </p>
        <SecondNavList
          mobile={props.mobile}
          openSecond={openSecond}
          OpenSecondMenu={OpenSecondMenu}
          changeMenuState={props.changeMenuState}
          dontChangeState={props.dontChangeState}
        />
      </li>
      <li className="dropDownItem">
        <NavLink
          to={"/payments/to-another-bank-in-currency"}
          className="dropDownItemLink firstMenuItemLink"
          onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
        >
          В другой банк в национальной валюте
        </NavLink>
      </li>
      <li className="dropDownItem">
        <NavLink
          to={"/payments/international-swift"}
          className="dropDownItemLink firstMenuItemLink"
          onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
        >
          Международные платежи SWIFT
        </NavLink>
      </li>
    </ul>
  );
};
