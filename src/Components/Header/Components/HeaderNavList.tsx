import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HeaderNavItem } from "./HeaderNavItem";
import "../Burger.scss";
import "./HeaderNav.scss";

export const HeaderNavList: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [mobile, setMobile] = useState<boolean>(false);
  let changeMenuState = (): void => {
    setToggle(!toggle);
  };
  const windowSize = (): void => {
    if (window.innerWidth < 790) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  window.addEventListener("resize", function (): void {
    windowSize();
  });

  useEffect(() => {
    windowSize();
  }, [setMobile]);

  const navListArray = [
    {
      name: "Главная",
      link: "/ibec-systems-test",
    },
    {
      name: "О нас",
      link: "/ibec-systems-test/about",
    },
    {
      name: "Платежи",
      children: [
        {
          name: "На свой счет внутри банка",
          link: "/ibec-systems-test/payments/inside-bank-to-you",
        },
        {
          name: "На чужой счет внутри банка",
          children: [
            {
              name: "Выдача банковских гарантий",
              link: "/ibec-systems-test/payments/bank-rigths",
            },
            {
              name: "Привлечение денежных денег, вкладов",
              link: "/ibec-systems-test/payments/get-money",
            },
            {
              name: "В другой банк в другой валюте",
              link: "/ibec-systems-test/payments/in-other-bank-in-other-money",
            },
            {
              name: "Лизинговые операции",
              link: "/ibec-systems-test/payments/rent-operations",
            },
          ],
        },
        {
          name: "В другой банк в национальной валюте",
          link: "/ibec-systems-test/payments/to-another-bank-in-currency",
        },
        {
          name: "Международные платежи SWIFT",
          link: "/ibec-systems-test/payments/international-swift",
        },
      ],
    },
    {
      name: "Купля/продажа валюты",
      link: "/ibec-systems-test/exchange",
    },
    {
      name: "Переводы",
      link: "/ibec-systems-test/translations",
    },
    {
      name: "Заявки",
      link: "/ibec-systems-test/applications",
    },
    {
      name: "Наши контакты",
      link: "/ibec-systems-test/contacts",
    },
  ];
  

  let navListMap = (data: any[]) => {
    return (
      <div className="listWrapper">
        {mobile && (
          <div className={toggle ? "mobileMenuHeader show" : "mobileMenuHeader hide"}>
            <div className="mobileMenuLogo"></div>
            <div className="mobileMenuTitle">My Account</div>
          </div>
        )}
        <ul className={toggle && mobile ? "navList showMenu" : "navList hideMenu"}>
          {data.map((item) => {
            return (
              <li className="navItem" key={item.name}>
                {item.children ? (
                  <HeaderNavItem
                    mobile={mobile}
                    parentName={item.name}
                    children={item.children}
                    navListMap={navListMap}
                  />
                ) : (
                  <NavLink to={item.link} className="navItemLink" onClick={changeMenuState}>
                    {item.name}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <nav className="headerNav">
      <div
        className={toggle ? "menu-icon menu-icon-active" : "menu-icon"}
        onClick={changeMenuState}
      >
        <div className="menu-icon-line"></div>
      </div>
      {navListMap(navListArray)}
    </nav>
  );
};
