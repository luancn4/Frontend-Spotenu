import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Signup from "../pages/SignupPage";
import ApprovationPage from "../pages/BandApprovationPage";
import GenresPage from "../pages/BandGenresPage";
import AlbumCreationPage from "../pages/AlbumCreationPage";
import MusicCreationPage from "../pages/MusicCreationPage";
import MainPage from "../pages/MainPage";
import NotApproved from "../pages/BandNotApprovedPage"
import Search from "../pages/SearchPage"

export const routes = {
  main: "/",
  login: "/login",
  signup: "/signup",
  approvation: "/approvation",
  genres: "/genres",
  albumCreation: "/albums",
  musicCreation: "/musics",
  notApproved: "/band",
  search: "/search"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.main} component={MainPage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.signup} component={Signup} />
        <Route exact path={routes.approvation} component={ApprovationPage} />
        <Route exact path={routes.genres} component={GenresPage} />
        <Route
          exact
          path={routes.albumCreation}
          component={AlbumCreationPage}
        />
        <Route
          exact
          path={routes.musicCreation}
          component={MusicCreationPage}
        />
        <Route exact path={routes.notApproved} component={NotApproved} />
        <Route exact path={routes.search} component={Search} />
      </Switch>
    </ConnectedRouter>
  );
}

export default connect()(Router);
