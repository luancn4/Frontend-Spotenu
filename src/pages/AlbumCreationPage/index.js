import React, { Component } from "react";
import { connect } from "react-redux";
import { getGenres } from "../../actions/bands";

class AlbumCreationPage extends Component {
  state = {
    album: {
      name: "",
      genres: [],
    },
  };

  handleInputName = (e) => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <form>
          <input></input>
          <br />
          <input></input>
          <label>oi</label>
          <input type="checkbox"></input>
          <button>Criar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreationPage);
