import React, { Component } from "react";
import { connect } from "react-redux";
import { createMusic, getAlbumsByBand } from "../../actions/bands";

class MusicCreation extends Component {
  state = {
    name: "",
    album: "",
  };

  componentDidMount = () => {
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
      <div>
        <input value={this.state.name} onChange={this.handleInputName} />
        <select onChange={this.handleSelectAlbum}>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  albums: state.bands.albums,
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: () => dispatch(getAlbumsByBand()),
  createMusic: (body) => dispatch(createMusic(body)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MusicCreation);
