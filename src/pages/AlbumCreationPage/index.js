import React, { Component } from "react";
import { connect } from "react-redux";
import { getGenres } from "../../actions/bands";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import styled from "styled-components";
import { createAlbum } from "../../actions/bands";

const CustomForm = styled(FormControl)`
  width: 400px;
`;

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
    this.props.allGenres();
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
      <div>
        <CustomForm>
          <input value={this.state.album.name} onChange={this.handleInput} />
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
        </CustomForm>
        <button onClick={() => this.props.create(this.state.album)}>
          Criar
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  genres: state.bands.genres,
});

const mapDispatchToProps = (dispatch) => ({
  allGenres: () => dispatch(getGenres()),
  create: (album) => dispatch(createAlbum(album)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreationPage);
