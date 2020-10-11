import React, { useState } from "react";
import "./HeaderNav.scss";

interface INavItemProps {
  navListMap: any;
  parentName: string;
  children: any[];
  mobile: boolean;
}

export const HeaderNavItem: React.FC<INavItemProps> = (props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  let changeMenuState = (): void => {
    setToggle(!toggle);
  };

  return (
    <div className="navItemSubMenu">
      <p className="subMenuItem" onClick={changeMenuState}>
        {props.parentName}
      </p>
      <div className={toggle ? "show" : "hide"}>
        {props.mobile && (
          <p
            onClick={changeMenuState}
            className="backNavListBtn"
          >
            Назад
          </p>
        )}
        {props.navListMap(props.children)}
      </div>
    </div>
  );
};
