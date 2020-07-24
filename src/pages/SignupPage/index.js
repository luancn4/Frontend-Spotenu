import React, { Component } from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../../router";
import { userSignup, bandSignup, adminSignup } from "../../actions/users";
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
    form: {
      description: "",
    },
    user: "normal",
    isAdmin: false,
    isBand: false,
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

    if (e.target.value === "band") {
      this.setState({
        isBand: true,
      });
    } else {
      this.setState({
        isBand: false,
      });
    }
  };

  handleDescription = (e) => {
    this.setState({
      form: { ...this.state.form, description: e.target.value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.user === "admin") {
      this.props.AdminSignup(this.state.form);
    } else if (this.state.user === "band") {
      this.props.BandSignup(this.state.form);
    } else {
      this.props.UserSignup(this.state.form);
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

            {this.state.isBand && (
              <TextField
                label={"Descrição"}
                required
                name={"description"}
                type={"text"}
                value={this.state.form.description || ""}
                onChange={this.handleDescription}
              />
            )}

            <Select value={this.state.user} onChange={this.handleUserOption}>
              <MenuItem value={"normal"}>Normal</MenuItem>
              <MenuItem value={"band"}>Banda</MenuItem>
              {this.state.isAdmin && (
                <MenuItem value={"admin"}>Administrador</MenuItem>
              )}
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
  AdminSignup: (body) => dispatch(adminSignup(body)),
});

export default connect(null, mapDispatchToProps)(Signup);
