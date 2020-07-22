import React, { Component } from "react";
import { connect } from "react-redux";
import { getGenres, createGenre } from "../../actions/bands";

class GenresPage extends Component {
  state = {
    genre: "",
  };
  componentDidMount = () => {
    this.props.allGenres();
  };

  handleInput = (e) => {
    this.setState({
      genre: e.target.value,
    });
  };

  createGenre = () => {
    this.props.createGenre(this.state.genre);

    this.setState({
      genre: "",
    });
    
    this.props.allGenres();
  };

  render() {
    return (
      <div>
        {this.props.genres &&
          this.props.genres.map((genre) => {
            return <p key={genre.id}>Gênero: {genre.genre}</p>;
          })}
        <input onChange={this.handleInput} value={this.state.genre}></input>
        <button onClick={this.createGenre}>Criar</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  genres: state.bands.genres,
});

const mapDispatchToProps = (dispatch) => ({
  allGenres: () => dispatch(getGenres()),
  createGenre: (genre) => dispatch(createGenre(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresPage);
