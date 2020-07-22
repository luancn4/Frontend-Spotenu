import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Signup from "../pages/SignupPage";
import ApprovationPage from "../pages/BandApprovationPage";
import GenresPage from "../pages/BandGenresPage";

export const routes = {
  login: "/",
  signup: "/signup",
  approvation: "/approvation",
  genres: "/genres",
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={Signup} />
        <Route exact path={routes.approvation} component={ApprovationPage} />
        <Route exact path={routes.genres} component={GenresPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default connect()(Router);
