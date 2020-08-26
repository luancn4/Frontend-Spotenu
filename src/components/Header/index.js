import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { GiMusicalScore } from "react-icons/gi";
import { routes } from "../../router";
import { replace, push } from "connected-react-router";
import { getUserInfo } from "../../actions/users";

class Header extends Component {
  state = {
    inicio: true,
    bandas: true,
    albuns: true,
    musicas: true,
    generos: true,
  };
  logout = () => {
    localStorage.removeItem("token");

    this.props.goToLogin();
  };

  componentDidMount() {
    if (this.props.user.type === "normal") {
      this.setState({
        bandas: false,
        albuns: false,
        musicas: false,
        generos: false,
      });
    }

    if (this.props.user.type === "band") {
      this.setState({
        bandas: false,
        albuns: true,
        musicas: true,
        generos: false,
      });
    }

    if (this.props.user.type === "admin") {
      this.setState({
        bandas: true,
        albuns: true,
        musicas: true,
        generos: true,
      });
    }
  }

  componentWillReceiveProps(props) {
    if (props.user.type === "normal") {
      this.setState({
        bandas: false,
        albuns: false,
        musicas: false,
        generos: false,
      });
    }

    if (props.user.type === "band") {
      this.setState({
        bandas: false,
        albuns: true,
        musicas: true,
        generos: false,
      });
    }

    if (props.user.type === "admin") {
      this.setState({
        bandas: true,
        albuns: true,
        musicas: true,
        generos: true,
      });
    }
  }

  render() {
    return (
      <Container
        i={this.state.inicio}
        b={this.state.bandas}
        a={this.state.albuns}
        m={this.state.musicas}
        g={this.state.generos}
      >
        <div>
          <GiMusicalScore />
          <strong>SPOTENU</strong>
        </div>
        <ul>
          <li onClick={() => this.props.goToSearch()}>
            <strong className="menuItems" id="inicio">
              INÍCIO
            </strong>
          </li>
          <li onClick={() => this.props.goToBands()}>
            <strong className="menuItems" id="bandas">
              BANDAS
            </strong>
          </li>
          <li onClick={() => this.props.goToAlbum()}>
            <strong className="menuItems" id="albuns">
              ALBUNS
            </strong>
          </li>
          <li onClick={() => this.props.goToMusics()}>
            <strong className="menuItems" id="musicas">
              MÚSICAS
            </strong>
          </li>
          <li onClick={() => this.props.goToGenres()}>
            <strong className="menuItems" id="generos">
              GÊNEROS
            </strong>
          </li>
          <li onClick={() => this.logout()}>
            <strong className="menuItems">LOGOUT</strong>
          </li>
        </ul>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.bands.user,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(getUserInfo()),
  goToSearch: () => dispatch(push(routes.search)),
  goToBands: () => dispatch(push(routes.approvation)),
  goToAlbum: () => dispatch(push(routes.albumCreation)),
  goToMusics: () => dispatch(push(routes.musicCreation)),
  goToGenres: () => dispatch(push(routes.genres)),
  goToLogin: () => dispatch(replace(routes.login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
