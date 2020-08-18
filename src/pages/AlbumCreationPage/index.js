import React, { Component } from "react";
import { connect } from "react-redux";
import { getGenres } from "../../actions/bands";
import { Container } from "./styles";
import { createAlbum } from "../../actions/bands";
import { routes } from "../../router";
import { replace } from "connected-react-router";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import styled from "styled-components";
import Header from "../../components/Header";

const CustomChip = styled(Chip)`
  width: 150px;
`;

class AlbumCreationPage extends Component {
  state = {
    album: {
      name: "",
      genres: [],
    },
  };

  componentDidMount = () => {
    const token = localStorage.getItem("token");
    if (
      !token ||
      this.props.user.type !== "band" ||
      !this.props.user.approved
    ) {
      this.props.goToLogin();
    } else {
      this.props.allGenres();
    }
  };

  handleInput = (e) => {
    this.setState({
      album: {
        ...this.state.album,
        name: e.target.value,
      },
    });
  };

  handleSelectChange = (e) => {
    this.setState({
      album: {
        ...this.state.album,
        genres: e.target.value,
      },
      selectedGenre: undefined,
    });
  };

  render() {
    return (
      <Container>
        <Header />
        <div className="wrapper">
          <div className="albums"></div>
          <div className="creation">
            <h1>Crie seu album</h1>
            <section>
              Nome do album:
              <div className="styledInput">
                <input
                  value={this.state.album.name}
                  onChange={this.handleInput}
                ></input>
                <span className="bottom"></span>
                <span className="right"></span>
                <span className="top"></span>
                <span className="left"></span>
              </div>
              Gêneros:
              <Select
                labelId="demo-mutiple-chip-label"
                id="demo-mutiple-chip"
                multiple
                value={this.state.album.genres}
                onChange={this.handleSelectChange}
                input={<Input id="select-multiple-chip" />}
                renderValue={(selected) => {
                  return (
                    <div>
                      {selected.map((value) => (
                        <CustomChip key={value} label={value} />
                      ))}
                    </div>
                  );
                }}
              >
                {this.props.genres.map((genre, i) => (
                  <MenuItem key={i} value={genre.genre}>
                    {genre.genre}
                  </MenuItem>
                ))}
              </Select>
              <button onClick={() => this.props.create(this.state.album)}>
                Criar
              </button>
            </section>
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
  allGenres: () => dispatch(getGenres()),
  create: (album) => dispatch(createAlbum(album)),
  goToLogin: () => dispatch(replace(routes.login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreationPage);
