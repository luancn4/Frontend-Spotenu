import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { routes } from "../../router";
import { replace } from "connected-react-router";
import { getUserInfo } from "../../actions/users";

class BandNotApprovedPage extends Component {
  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (token && !this.props.user) {
      this.props.getInfo();
    }

    if (!token && !this.props.user) {
      this.props.goToLogin();
    }

    if (token && this.props.user.approved) {
      this.props.goToAlbum();
    }
  };
  render() {
    return (
      <Container>
        <div>
          <h1>Parece que sua banda ainda não foi aprovada :(</h1>
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
  getInfo: () => dispatch(getUserInfo()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandNotApprovedPage);
