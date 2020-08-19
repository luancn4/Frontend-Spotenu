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

  .logout {
    :hover {
      background-color: lightgoldenrodyellow;
      cursor: pointer;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <Container>
        <div>
          <GiMusicalScore />
          <strong>SPOTENU</strong>
        </div>
        <ul>
          <li onClick={() => this.props.goToSearch}>
            <strong className="logout">INÍCIO</strong>
          </li>
          <li>
            <strong className="logout">BANDAS</strong>
          </li>
          <li>
            <strong className="logout">ALBUNS</strong>
          </li>
          <li>
            <strong className="logout">MÚSICAS</strong>
          </li>
          <li>
            <strong className="logout">GÊNEROS</strong>
          </li>
          <li>
            <strong className="logout">LOGOUT</strong>
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
  goToSearch: () => dispatch(push(routes.goToSearch)),
  goToBands: () => dispatch(push(routes.approvation)),
  goToAlbum: () => dispatch(push(routes.albumCreation)),
  goToMusics: () => dispatch(push(routes.musicCreation)),
  goToGenres: () => dispatch(push(routes.genres)),
  getInfo: () => dispatch(getUserInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
