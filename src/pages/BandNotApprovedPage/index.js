import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { routes } from "../../router";
import { replace } from "connected-react-router";
import { getUserInfo } from "../../actions/users";

class BandNotApprovedPage extends Component {
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      this.props.goToLogin();
    }

    if (token && this.props.user.length === 0) {
      this.props.getInfo();
    }

    if (this.props.user && token) {
      switch (this.props.user.type) {
        case "normal":
          this.props.goToSearch();
          break;

        case "band":
          if (!this.props.user.approved) {
            this.props.goToNotApproved();
          } else {
            this.props.goToAlbum();
          }
          break;

        case "admin":
          break;

        default:
          return false;
      }
    }
  };

  componentDidUpdate = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      this.props.goToLogin();
    }

    if (this.props.user && token) {
      switch (this.props.user.type) {
        case "normal":
          this.props.goToSearch();
          break;

        case "band":
          if (this.props.user.approved) {
            this.props.goToSearch();
          }
          break;

        case "admin":
          break;

        default:
          this.props.goToLogin();
      }
    }
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Sua banda ainda não foi aprovada :(</h1>
          <h4>
            Nossos moderadores estão trabalhando nisso, tente novamente mais
            tarde!
          </h4>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.bands.user,
});

const mapDispatchToProps = (dispatch) => ({
  goToAlbum: () => dispatch(replace(routes.albumCreation)),
  goToLogin: () => dispatch(replace(routes.login)),
  goToSearch: () => dispatch(replace(routes.search)),
  getInfo: () => dispatch(getUserInfo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandNotApprovedPage);
