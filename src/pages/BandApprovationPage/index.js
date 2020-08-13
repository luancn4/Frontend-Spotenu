import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllBands, approveBand } from "../../actions/bands";
import { Container } from "./styles";
import bg from "./backgroundteste.png";
import { GiMusicalScore } from "react-icons/gi";

class ApprovationPage extends Component {
  componentDidMount = () => {
    this.props.renderAllBands();
  };

  approveBand = (id) => {
    this.props.approveBand(id);
  };

  render() {
    return (
      <Container>
        <header>
          <div>
            <GiMusicalScore />
            <strong>SPOTENU</strong>
          </div>
          <div>
            <strong className="logout">LOGOUT</strong>
          </div>
        </header>
        <div className="flex">
          <img className="left" src={bg} />
          <div className="right">
            <h1>Lista de bandas</h1>
            <div className="bands">
              {this.props.bands &&
                this.props.bands.map((band) => {
                  return (
                    <ul key={band.id}>
                      <li>
                        {band.name}{" "}
                        {!band.approved && (
                          <button onClick={() => this.approveBand(band.id)}>
                            Aprovar
                          </button>
                        )}
                      </li>
                    </ul>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  bands: state.bands.bands,
});

const mapDispatchToProps = (dispatch) => ({
  renderAllBands: () => dispatch(getAllBands()),
  approveBand: (id) => dispatch(approveBand(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ApprovationPage);
