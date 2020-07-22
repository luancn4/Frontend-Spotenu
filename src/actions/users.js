import axios from "axios";

const baseUrl = "http://localhost:3000/users";

export const login = (body) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, body);

    localStorage.setItem("token", response.data.accessToken);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const userSignup = (body) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, body);

    localStorage.setItem("token", response.data.accessToken);
    console.log(response.data);
  } catch (err) {
    console.error(err.message);
  }
};

export const bandSignup = (body) => async (dispatch) => {
  console.log(body);

  try {
    const response = await axios.post(`${baseUrl}/signup/band`, body);

    localStorage.setItem("token", response.data.accessToken);
    console.log(response.data);
  } catch (err) {
    console.error(err.message);
  }
};

export const adminSignup = (body) => async (dispatch) => {
  const token = localStorage.getItem("accessToken");
  try {
    const response = await axios.post(`${baseUrl}/signup/admin`, body, {
      headers: {
        authorization: token,
      },
    });

    localStorage.setItem("token", response.data.accessToken);
    console.log(response.data);
  } catch (err) {
    console.error(err.message);
  }
};
