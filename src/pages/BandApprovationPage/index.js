import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllBands, approveBand } from "../../actions/bands";

class ApprovationPage extends Component {
  componentDidMount = () => {
    this.props.renderAllBands();
  };

  approveBand = (id) => {
    this.props.approveBand(id);
  };

  render() {
    return (
      <div>
        {this.props.bands &&
          this.props.bands.map((band) => {
            return (
              <div key={band.id}>
                <p>Banda: {band.name}</p>
                <p>Nick: {band.nickname}</p>
                <p>Aprovada: {band.approved ? "Sim" : "Não"}</p>
                {!band.approved && (
                  <button onClick={() => this.approveBand(band.id)}>
                    Aprovar
                  </button>
                )}
              </div>
            );
          })}
      </div>
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
