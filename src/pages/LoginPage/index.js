import React, { Component } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container } from "./style";
import { login, getUserInfo } from "../../actions/users";
import { routes } from "../../router/";
import { push, replace } from "connected-react-router";

const loginForm = [
  {
    name: "emailOrNick",
    label: "Email ",
  },
  {
    name: "password",
    type: "password",
    label: "Senha ",
  },
];

class LoginPage extends Component {
  state = {
    login: {},
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");

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
            this.props.goToSearch();
          }
          break;

        case "admin":
          this.props.goToApprovation();
          break;

        default:
          return false;
      }
    }
  };

  componentDidUpdate = () => {
    const token = localStorage.getItem("token");

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
            this.props.goToSearch();
          }
          break;

        case "admin":
          this.props.goToApprovation();
          break;

        default:
          return false;
      }
    }
  };

  handleInputLogin = (e) => {
    const { name, value } = e.target;

    this.setState({
      login: { ...this.state.login, [name]: value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.login);
  };

  render() {
    return (
      <Container>
        <div className="formWrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>Entre já e comece a curtir!</h1>
            {loginForm.map((input) => {
              return (
                <div key={input.name}>
                  <TextField
                    className="inputs"
                    label={input.label}
                    required
                    name={input.name}
                    type={input.type}
                    value={this.state.login[input.name] || ""}
                    onChange={this.handleInputLogin}
                  />
                </div>
              );
            })}

            <Button
              className="button"
              color="secondary"
              variant="contained"
              type="submit"
            >
              Entrar
            </Button>
            <p>
              Não possui uma conta?{" "}
              <span onClick={() => this.props.signup()}>Cadastre-se!</span>
            </p>
          </form>
        </div>
        <div className="background">
          <img
            src={"https://blush.ly/q3CIMxQvR/p"}
            alt="Duas pessoas sentadas no sofá"
          />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.bands.user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (body) => dispatch(login(body)),
  signup: () => dispatch(push(routes.signup)),
  getInfo: () => dispatch(getUserInfo()),
  goToSearch: () => dispatch(replace(routes.search)),
  goToApprovation: () => dispatch(replace(routes.approvation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
