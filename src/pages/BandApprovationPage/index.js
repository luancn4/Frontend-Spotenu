import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllBands, approveBand } from "../../actions/bands";
import { Container } from "./styles";
import bg from "./backgroundteste.png";
import { routes } from "../../router";
import { replace } from "connected-react-router";
import Header from "../../components/Header";

class ApprovationPage extends Component {
  componentDidMount = () => {
    const token = localStorage.getItem("token");

    this.props.renderAllBands();
  };

  approveBand = (id) => {
    this.props.approveBand(id);
  };

  render() {
    return (
      <Container>
        <Header />
        <div className="flex">
          <img className="left" src={bg} />
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
  renderAllBands: () => dispatch(getAllBands()),
  approveBand: (id) => dispatch(approveBand(id)),
  goToLogin: () => dispatch(replace(routes.login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApprovationPage);
