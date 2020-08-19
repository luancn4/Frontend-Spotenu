import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "./styles";
import {routes} from "../../router"
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button";


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
          <Button onClick = {() => this.props.goToLogin()}>Entrar</Button>
          <Button className= "secondButton" onClick = {() => this.props.goToSignup()}>Cadastrar</Button>
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
