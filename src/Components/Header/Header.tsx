import React from "react";
import "./Burger.scss";
import { NavLink } from "react-router-dom";
import { HeaderNavList } from "./Components/HeaderNavList";

export const Header: React.FC = () => {

  return (
    <div className="header">
      <div className="headerTop"></div>
      <div className="headerRow wrapper">
        <NavLink to={"/ibec-systems-test"} className="headerLogo"></NavLink>
        <div className="headerTitle">My Account</div>
        <HeaderNavList />
      </div>
    </div>
  );
};
