import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { getUserInfo, searchForMusic } from "../../actions/users";
import { replace } from "connected-react-router";
import { routes } from "../../router";

import Header from "../../components/Header";

class SearchPage extends Component {
  state = {
    music: "",
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    this.props.search(this.state.music);

    if (!token && this.props.user.length === 0) {
      this.props.goToLogin();
    }

    if (token && this.props.user.length === 0) {
      this.props.getInfo();
    }

    if (this.props.user && token) {
      switch (this.props.user.type) {
        case "normal":
        case "band":
        case "admin":
          return true;

        default:
          return false;
      }
    }
  };

  componentDidUpdate = (prevProps) => {
    const token = localStorage.getItem("token");

    if (!token) {
      this.props.goToLogin();
    }

    if (prevProps.user && this.props.user && token) {
      switch (this.props.user.type) {
        case "normal":
        case "band":
        case "admin":
          return true;

        default:
          return false;
      }
    }
  };

  searchFor = (e) => {
    this.setState({ music: e.target.value });
    this.props.search(e.target.value);
  };

  render() {
    return (
      <Container>
        <Header />
        <div className="flex">
          <div className="center">
            <input onChange={this.searchFor} value = {this.state.music} placeholder = "Pesquisar..."/>
            <div className="bands">
              <ul>
                {this.props.musics &&
                  this.props.musics.map((music) => {
                    return <li key={music.id}>{music.music}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.bands.user,
  musics: state.bands.musics,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(getUserInfo()),
  goToLogin: () => dispatch(replace(routes.login)),
  search: (music) => dispatch(searchForMusic(music)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
