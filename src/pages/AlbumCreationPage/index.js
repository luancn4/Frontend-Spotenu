import React, { Component } from "react";
import { connect } from "react-redux";
import { getGenres } from "../../actions/bands";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import styled from "styled-components";

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
    selectedGenre: undefined,
  };

  componentDidMount = () => {
    this.props.allGenres();
  };

  handleChange = (e) => {
    this.setState({
      album: {
        ...this.state.album,
        genres: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <form>
          Nome do album:
          <input></input>
          <br />
          <CustomForm>
            <InputLabel id="demo-mutiple-chip-label">
              Selecione os Gêneros
            </InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={this.state.album.genres}
              onChange={this.handleChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => {
                console.log("selected: ", selected);
                return (
                  <div>
                    {selected.map((value) => (
                      <CustomChip key={value.id} label={value.name} />
                    ))}
                  </div>
                );
              }}
            >
              {this.props.genres.map((genre, i) => (
                <MenuItem key={i} value={genre}>
                  {genre.name}
                </MenuItem>
              ))}
            </Select>
          </CustomForm>
          <button>Criar</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  genres: state.bands.genres,
});

const mapDispatchToProps = (dispatch) => ({
  allGenres: () => dispatch(getGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCreationPage);
