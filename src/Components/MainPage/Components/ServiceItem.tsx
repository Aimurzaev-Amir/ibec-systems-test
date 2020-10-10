import React from "react";
import "../MainPage.scss";
import img from "../../../assets/car.png";

interface ServiceItemProps {
  image: string;
  title: string;
}

export const ServiceItem: React.FC<ServiceItemProps> = (props) => {
  return (
    <div className="serviceItem">
      <div className="serviceItemImg">
        <img src={props.image} alt="car" />
      </div>
      <div className="serviceItemFooter">
        <p className="serviceItemFooterTitle">{props.title}</p>
      </div>
    </div>
  );
};
