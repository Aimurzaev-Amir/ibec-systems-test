import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Header.scss";

interface ISecondSubMenu {
  openSecond: boolean;
  mobile: boolean;
  OpenSecondMenu(): void;
  changeMenuState(): void;
  dontChangeState(): void;
}

export const SecondNavList: React.FC<ISecondSubMenu> = (props) => {
  const [smallWindow, setSmall] = useState<boolean>(false);

  window.addEventListener("resize", function () {
    if (window.innerWidth < 960) {
      setSmall(true);
    } else {
      setSmall(false);
    }
  });

  return (
    <div className={props.openSecond && props.mobile ? "show" : ""}>
      <ul
        className={
          smallWindow ? "menuDropDownList secondMenu leftMenu" : "menuDropDownList secondMenu"
        }
      >
        {props.openSecond &&
          props.mobile && (
            <li className="dropDownItem secondMenuItem">
              <p className="dropDownItemSubMenu" onClick={props.OpenSecondMenu}>
                Назад
              </p>
            </li>
          )}
        <li className="dropDownItem secondMenuItem">
          <NavLink
            to={"/payments/inside-bank-to-you2"}
            className="dropDownItemLink secondMenuItemLink"
            onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
          >
            Выдача банковских гарантий
          </NavLink>
        </li>
        <li className="dropDownItem">
          <NavLink
            to={"/payments/inside-bank-to-other2"}
            className="dropDownItemLink secondMenuItemLink"
            onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
          >
            Привлечение денежных денег, вкладов
          </NavLink>
        </li>
        <li className="dropDownItem">
          <NavLink
            to={"/payments/to-another-bank-in-currency2"}
            className="dropDownItemLink secondMenuItemLink"
            onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
          >
            В другой банк в другой валюте
          </NavLink>
        </li>
        <li className="dropDownItem">
          <NavLink
            to={"/payments/international-swift2"}
            className="dropDownItemLink secondMenuItemLink"
            onClick={props.mobile ? props.changeMenuState : props.dontChangeState}
          >
            Лизинговые операции
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
