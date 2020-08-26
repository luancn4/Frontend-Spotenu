import React, { Component } from "react";
import { connect } from "react-redux";
import { getGenres, createGenre } from "../../actions/bands";
import { Container } from "./styles";
import { routes } from "../../router";
import { replace } from "connected-react-router";
import { getUserInfo } from "../../actions/users";
import Header from "../../components/Header";

class GenresPage extends Component {
  state = {
    genre: "",
  };
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
          this.props.allGenres();
          break;

        default:
          return false
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
          this.props.allGenres();
          break;

        default:
          this.props.goToLogin();
      }
    }
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
        <Header />
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
              <div className="divizona">
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
  user: state.bands.user,
});

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(getUserInfo()),
  goToSearch: () => dispatch(replace(routes.search)),
  goToNotApproved: () => dispatch(replace(routes.notApproved)),
  goToLogin: () => dispatch(replace(routes.login)),
  allGenres: () => dispatch(getGenres()),
  createGenre: (genre) => dispatch(createGenre(genre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresPage);
