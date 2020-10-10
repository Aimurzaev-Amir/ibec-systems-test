import React, { useState } from "react";
import "./Header.scss";
import "./Burger.scss";
import { NavList } from "./Components/NavList";
import { NavLink } from "react-router-dom";

export const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);
  let changeMenuState = (): void => {
    setToggle(!toggle);
  };

  let dontChangeState = (): void => {
    setToggle(false);
  };

  window.addEventListener("resize", function (): void {
    if (window.innerWidth < 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });
  return (
    <div className="header">
      <div className="headerTop"></div>
      <div className="headerRow wrapper">
        <NavLink to={"/"} className="headerLogo"></NavLink>
        <div className="headerTitle">My Account</div>
        <nav className="headerNav">
          <div
            className={toggle ? "menu-icon menu-icon-active" : "menu-icon"}
            onClick={changeMenuState}
          >
            <div className="menu-icon-line"></div>
          </div>
          <NavList
            toggle={toggle}
            changeMenuState={changeMenuState}
            dontChangeState={dontChangeState}
            mobile={mobile}
          />
        </nav>
      </div>
    </div>
  );
};
