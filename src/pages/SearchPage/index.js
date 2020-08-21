import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { getUserInfo } from "../../actions/users";
import { replace } from "connected-react-router";
import { routes } from "../../router";

import Header from "../../components/Header";

class SearchPage extends Component {
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
        case "band":
        case "admin":
          return true;

        default:
          this.props.goToLogin();
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
        case "band":
        case "admin":
          return true;

        default:
          this.props.goToLogin();
      }
    }
  };

  render() {
    return (
      <Container>
        <Header />
        <input />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.bands.user,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(getUserInfo()),
  goToLogin: () => dispatch(replace(routes.login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
