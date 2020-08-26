import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllBands, approveBand } from "../../actions/bands";
import { getUserInfo } from "../../actions/users";
import { Container } from "./styles";
import bg from "./backgroundteste.png";
import { routes } from "../../router";
import { replace } from "connected-react-router";
import Header from "../../components/Header";

class ApprovationPage extends Component {
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
            this.props.goToSearch();
          }
          break;

        case "admin":
          this.props.renderAllBands();
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
          if (!this.props.user.approved) {
            this.props.goToNotApproved();
          } else {
            this.props.goToSearch();
          }
          break;

        case "admin":
          this.props.renderAllBands();
          break;

        default:
          return false;
      }
    }
  };

  approveBand = (id) => {
    this.props.approveBand(id);
  };

  render() {
    return (
      <Container>
        <Header />
        <div className="flex">
          <img className="left" src={bg} alt = "Foto"/>
          <div className="right">
            <h1>Lista de bandas</h1>
            <div className="bands">
              <ul>
                {this.props.bands &&
                  this.props.bands.map((band) => {
                    return (
                      <li key={band.id}>
                        {band.name}{" "}
                        {!band.approved && (
                          <button onClick={() => this.approveBand(band.id)}>
                            Aprovar
                          </button>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  bands: state.bands.bands,
  user: state.bands.user,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(getUserInfo()),
  renderAllBands: () => dispatch(getAllBands()),
  approveBand: (id) => dispatch(approveBand(id)),
  goToLogin: () => dispatch(replace(routes.login)),
  goToSearch: () => dispatch(replace(routes.search)),
  goToNotApproved: () => dispatch(replace(routes.notApproved)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApprovationPage);
