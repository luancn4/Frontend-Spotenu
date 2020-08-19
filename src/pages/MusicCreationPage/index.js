import React, { Component } from "react";
import { connect } from "react-redux";
import { createMusic, getAlbumsByBand } from "../../actions/bands";
import { Container } from "./styles";
import { routes } from "../../router";
import { replace } from "connected-react-router";
import Header from "../../components/Header";
import bg from "./background.png";

class MusicCreation extends Component {
  state = {
    name: "",
    album: "",
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");

    this.props.getAlbums();
  };

  handleInputName = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  };

  handleSelectAlbum = (e) => {
    this.setState({
      ...this.state,
      album: e.target.value,
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <div className="wrapper">
          <div className="left">
            <h1>Adicione músicas aos seus albuns</h1>
            <section>
              <div className="styledInput">
                <input
                  placeholder="Qual o nome da música?"
                  value={this.state.name}
                  onChange={this.handleInputName}
                />
                <span className="bottom" />
                <span className="right" />
                <span className="top" />
                <span className="left" />
              </div>
              <select
                onChange={this.handleSelectAlbum}
                className="custom-dropdown"
              >
                <option>Selecione o album</option>
                {this.props.albums &&
                  this.props.albums.map((album, i) => {
                    return (
                      <option key={i} value={album.name}>
                        {album.name}
                      </option>
                    );
                  })}
              </select>
              <button onClick={() => this.props.createMusic(this.state)}>
                Criar música
              </button>
            </section>
          </div>
          <div className="right">
            {" "}
            <img src={bg} alt="Pássaro cantando" />
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: state.bands.albums,
  user: state.bands.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbumsByBand()),
  createMusic: (body) => dispatch(createMusic(body)),
  goToLogin: () => dispatch(replace(routes.login)),
  goToNotApproved: () => dispatch(replace(routes.notApproved)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicCreation);
