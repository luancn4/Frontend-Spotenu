import axios from "axios";
import { replace } from "connected-react-router";
import { routes } from "../router";

const baseUrl =
  "https://vitftlgchg.execute-api.us-east-1.amazonaws.com/dev/users";

export const login = (body) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, body);

    localStorage.setItem("token", response.data.accessToken);
  } catch (error) {
    console.error(error);
  }
};

export const userSignup = (body) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, body);

    localStorage.setItem("token", response.data.accessToken);
    dispatch(replace(routes.approvation));
  } catch (err) {
    console.error(err.message);
  }
};

export const bandSignup = (body) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/signup/band`, body);

    localStorage.setItem("token", response.data.accessToken);
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
  } catch (err) {
    console.error(err.message);
  }
};
