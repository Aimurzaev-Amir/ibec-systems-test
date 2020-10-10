import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <div className="footerFlex">
      <div className="companyRights">
        <p>Copyright © 2012. Банк SuperBank. Все права защищены</p>
      </div>
      <div className="footerMenu">
        <ul className="footerMenuList">
          <li className="footerMenuItem">
            <NavLink to={"/about"} className="footerMenuItemLink">
              О проекте
            </NavLink>
          </li>
          <li className="footerMenuItem">
            <NavLink to={"/terms-of-use"} className="footerMenuItemLink">
              Пользовательское соглашение
            </NavLink>
          </li>
          <li className="footerMenuItem">
            <NavLink to={"/feedback"} className="footerMenuItemLink">
              Обратная связь
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
