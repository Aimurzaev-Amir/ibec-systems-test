import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { AboutContainer } from "./About/AboutContainer";
import { Contacts } from "./Contacts/Contacts";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { MainPage } from "./MainPage/MainPage";

export const IbecRouting: React.FC<any> = (props) => {
  const NoMatch = () => (
    <div className="noMatch">
      <h3 className="mobilePaddings">No match for {props.location.pathname}</h3>
    </div>
  );
  return (
    <div className="bgColor">
      <Header />
      <div className="wrapper">
        <Switch>
          <Route exact path="/ibec-systems-test" component={() => <MainPage />} />
          <Route exact path="/ibec-systems-test/about" component={() => <AboutContainer />} />
          <Route exact path="/ibec-systems-test/contacts" component={() => <Contacts />} />
          <Route component={() => <NoMatch />} />
        </Switch>
        <Footer />
      </div>
    </div>
  );
};

export const IbecRoutingContainer = withRouter(IbecRouting);
