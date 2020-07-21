import React, { Component } from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../../router";
import { userSignup, bandSignup } from "../../actions/users";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { MainWrapperLogin, LoginWrapper, ButtonStyled } from "./style";

const signupForm = [
  {
    name: "name",
    type: "text",
    label: "Nome de usuário",
    pattern: "[A-Za-zçÇ0-9 .]{5,}",
    title: "Mínimo 5 caracteres",
  },
  {
    name: "nickname",
    type: "text",
    label: "Nickname de usuário",
    pattern: "[A-Za-zçÇ0-9]{5,}",
    title: "Mínimo 5 caracteres",
  },
  {
    name: "email",
    type: "email",
    label: "Email ",
    title: "Digite um email válido",
  },
  {
    name: "password",
    type: "password",
    label: "Senha ",
    pattern: "[A-Za-zçÇ0-9]{6,}",
    title: "Mínimo 6 caracteres",
  },
];

class Signup extends Component {
  state = {
    form: {},
    user: "normal",
  };

  componentDidMount() {
    // const token = localStorage.getItem("token");
    // if (token !== null) {
    //   this.props.goToPosts();
    // }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      form: { ...this.state.form, [name]: value },
    });
  };

  handleUserOption = (e) => {
    this.setState({
      user: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.user === "normal") {
      this.props.UserSignup(this.state.form);
    } else {
      this.props.BandSignup(this.state.form);
    }
  };

  render() {
    return (
      <>
        <MainWrapperLogin>
          <LoginWrapper onSubmit={this.handleSubmit}>
            {signupForm.map((input) => {
              return (
                <div key={input.name}>
                  <TextField
                    label={input.label}
                    required
                    name={input.name}
                    type={input.type}
                    inputProps={{
                      pattern: input.pattern,
                      title: input.title,
                    }}
                    value={this.state.form[input.name] || ""}
                    onChange={this.handleInputChange}
                  />
                </div>
              );
            })}
            <Select value={this.state.user} onChange={this.handleUserOption}>
              <MenuItem value={"normal"}>Normal</MenuItem>
              <MenuItem value={"band"}>Banda</MenuItem>
            </Select>
            <ButtonStyled color="primary" variant="contained" type="submit">
              Cadastrar
            </ButtonStyled>
          </LoginWrapper>
        </MainWrapperLogin>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  UserSignup: (body) => dispatch(userSignup(body)),
  BandSignup: (body) => dispatch(bandSignup(body)),
});

export default connect(null, mapDispatchToProps)(Signup);
