import axios from "axios";

const baseUrl = "http://localhost:3000/bands/";

export const setAllBands = (band) => {
  return {
    type: "SET_ALL_BANDS",
    payload: {
      band,
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
  } catch (error) {
    console.error(error);
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
