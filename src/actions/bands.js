import axios from "axios";

const baseUrl = "https://vitftlgchg.execute-api.us-east-1.amazonaws.com/dev/bands";

export const setAllBands = (band) => {
  return {
    type: "SET_ALL_BANDS",
    payload: {
      band,
    },
  };
};

export const setAllGenres = (genre) => {
  return {
    type: "SET_ALL_GENRES",
    payload: {
      genre,
    },
  };
};

export const setBandAlbums = (album) => {
  return {
    type: "SET_BAND_ALBUMS",
    payload: {
      album,
    },
  };
};

export const getAllBands = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const body = {};
  try {
    const response = await axios.get(`${baseUrl}/all`, body, {
      headers: {
        authorization: token,
      },
    });

    dispatch(setAllBands(response.data));
  } catch (err) {
    console.error(err);
  }
};

export const getGenres = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get(`${baseUrl}/genres`, {
      headers: {
        authorization: token,
      },
    });

    dispatch(setAllGenres(res.data.genres));
  } catch (err) {
    console.error(err);
  }
};

export const approveBand = (id) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const body = {
    id,
  };

  try {
    await axios.post(`${baseUrl}/approve`, body, {
      headers: {
        authorization: token,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const createGenre = (genre) => async (dispatch) => {
  const token = localStorage.getItem("token");
  const body = {
    genre,
  };
  try {
    await axios.post(`${baseUrl}/genre/create`, body, {
      headers: {
        authorization: token,
      },
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const createAlbum = (body) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    await axios.post(`${baseUrl}/album/create`, body, {
      headers: {
        authorization: token,
      },
    });
  } catch (err) {
    console.error(err);
  }
};

export const getAlbumsByBand = () => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get(`${baseUrl}/albums`, {
      headers: {
        authorization: token,
      },
    });
    dispatch(setBandAlbums(res.data.albums));
  } catch (err) {
    console.error(err);
  }
};

export const createMusic = (body) => async (dispatch) => {
  const token = localStorage.getItem("token");

  try {
    await axios.post(`${baseUrl}/music/create`, body, {
      headers: {
        authorization: token,
      },
    });
  } catch (err) {
    console.error(err);
  }
};
