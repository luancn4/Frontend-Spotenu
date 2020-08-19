import React, { Component } from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { routes } from "../../router";
import { replace } from "connected-react-router";
import Header from "../../components/Header";

class SearchPage extends Component {
  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
