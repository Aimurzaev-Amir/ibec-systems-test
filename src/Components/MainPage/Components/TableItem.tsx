import React from "react";
import liner from "../../../assets/liner.png";
import "../MainPage.scss";

interface TableItemProps {
  title: string,
}

export const TableItem: React.FC<TableItemProps> = (props) => {
  return (
    <div className="tabletItem">
      <img className="liner" src={liner} alt="liner icon" />
      <div className="tabletItemTitle">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};
