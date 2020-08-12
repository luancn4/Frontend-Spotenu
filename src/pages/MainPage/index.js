import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "./styles";
import {routes} from "../../router"
import { push } from "connected-react-router";

class MainPage extends Component {
  render() {
    return (
      <Container>
        <h1>Spotenu</h1>
        <span>
          <h3>Você traz a paixão. Nós trazemos a música.</h3>
        </span>

        <br></br>
        <div className="buttons">
          <button onClick = {() => this.props.goToLogin()}>Entrar</button>
          <button onClick = {() => this.props.goToSignup()}>Cadastrar</button>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToLogin: () => dispatch(push(routes.login)),
  goToSignup: () => dispatch(push(routes.signup))

});

export default connect(null, mapDispatchToProps)(MainPage);
