import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { GiMusicalScore } from "react-icons/gi";
import { routes } from "../../router";
import { replace, push } from "connected-react-router";
import { getUserInfo } from "../../actions/users";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 10vh;
  text-align: center;
  top: 0;
  width: 100vw;

  div {
    display: flex;
    align-items: center;
    padding: 0.8em;
    font-size: 25px;
  }

  svg {
    height: 30px;
    width: 33px;
  }

  ul {
    display: flex;
    li {
      strong {
        padding: 0.8em;
        font-size: 25px;
      }
    }
  }

  .menuItems {
    :hover {
      background-color: lightgoldenrodyellow;
      cursor: pointer;
    }
  }
`;

class Header extends Component {
  logout = () => {
    localStorage.removeItem("token");

    this.props.goToLogin();
  };

  render() {
    return (
      <Container>
        <div>
          <GiMusicalScore />
          <strong>SPOTENU</strong>
        </div>
        <ul>
          <li onClick={() => this.props.goToSearch()}>
            <strong className="menuItems">INÍCIO</strong>
          </li>
          <li onClick={() => this.props.goToBands()}>
            <strong className="menuItems">BANDAS</strong>
          </li>
          <li onClick={() => this.props.goToAlbum()}>
            <strong className="menuItems">ALBUNS</strong>
          </li>
          <li onClick={() => this.props.goToMusics()}>
            <strong className="menuItems">MÚSICAS</strong>
          </li>
          <li onClick={() => this.props.goToGenres()}>
            <strong className="menuItems">GÊNEROS</strong>
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
