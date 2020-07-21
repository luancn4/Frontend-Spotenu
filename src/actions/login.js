import axios from "axios";

const baseUrl = "http://localhost:3000";

export const login = (body) => async (dispatch) => {
  try {
    const response = await axios.post(`${baseUrl}/users/login`, body);

    localStorage.setItem("token", response.data.token);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
