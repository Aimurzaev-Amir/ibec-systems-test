import React from "react";
import { ServiceItem } from "./Components/ServiceItem";
import { TableItem } from "./Components/TableItem";
import "./MainPage.scss";
import women from "../../assets/women.png";
import car from "../../assets/car.png";

export const MainPage: React.FC = () => {
  return (
    <div className="tablesGrid">
      <div className="accountsTablets">
        <TableItem title="Мои счета" />
        <TableItem title="Шаблоны операций" />
        <TableItem title="Мои счета" />
        <TableItem title="Шаблоны операций" />
        <TableItem title="Мои счета" />
        <TableItem title="Шаблоны операций" />
      </div>
      <div className="serviceTablets">
        <ServiceItem image={car} title="Кредит Авто" />
        <ServiceItem image={women} title="Депозиты" />
      </div>
    </div>
  );
};
