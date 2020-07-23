import React, { Component } from "react";
import { connect } from "react-redux";
import { getGenres } from "../../actions/bands";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

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

  handleChange = (e) => {
    this.setState({
      album: {
        ...this.state.album, 
        genres: e.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <form>
          Nome do album:
          <input></input>
          <br />
          <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={this.state.album.genres}
            onChange={this.handleChange}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
          >
            {this.props.genres && this.props.genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.name}>
                <Checkbox checked={this.props.genres.indexOf(genre.name) > -1} />
                <ListItemText primary={genre.name} />
              </MenuItem>
            ))}
          </Select>
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
