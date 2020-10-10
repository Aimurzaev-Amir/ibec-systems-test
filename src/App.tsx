import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { IbecRoutingContainer } from "./Components/IbecRoutingContainer";

const IbecApp: React.FC = () => {
  return (
    <BrowserRouter>
      <IbecRoutingContainer />
    </BrowserRouter>
  );
};

export default IbecApp;
