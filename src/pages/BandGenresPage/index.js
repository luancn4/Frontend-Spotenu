import React, { Component } from "react";
import { connect } from "react-redux";
import { getGenres, createGenre } from "../../actions/bands";
import { Container } from "./styles";
import { GiMusicalScore } from "react-icons/gi";


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
        <div className="background">
          <img
            src={"https://blush.ly/OMuSJorGu/p"}
            alt="Pessoa tocando guitarra"
          />
        </div>
        <div className="genreWrapper">
          <h1>Lista de gêneros musicais</h1>
          <div className="genres">
            <ul>
              {this.props.genres &&
                this.props.genres.map((genre) => {
                  return <li key={genre.id}>{genre.genre}</li>;
                })}
            </ul>

            <div>
              <div className = "divizona">
                <input
                  onChange={this.handleInput}
                  value={this.state.genre}
                ></input>
                <span className="bottom"></span>
                <span className="right"></span>
                <span className="top"></span>
                <span className="left"></span>
              </div>
              <button onClick={this.createGenre}>Criar</button>
            </div>
          </div>
        </div>
      </Container>
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
