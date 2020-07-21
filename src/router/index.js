import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Signup from "../pages/SignupPage";

export const routes = {
  login: "/",
  signup: "/signup"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={Signup} />
      </Switch>
    </ConnectedRouter>
  );
}

export default connect()(Router);
