import axios from "axios";

const baseUrl = "http://localhost:3000/bands";

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

export const getAllBands = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(`${baseUrl}/all`, {
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
    console.log(body, token);
  } catch (err) {
    console.error(err);
  }
};
