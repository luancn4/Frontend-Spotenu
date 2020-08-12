import styled from "styled-components";
import bg from "./teste.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5em;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: #f2f2f2;

  h1 {
    padding: 0.2em;
    font-size: 10em;
    border: 12px outset #1C2F3E;
    border-radius: 37px;
  }

  h3 {
    color: whitesmoke;
    font-size: 1.8em;
    margin: 2em 0 2em;
  }

  .buttons {
    display: flex;
    justify-content: space-evenly;
    width: 500px;

    button {
      width: 200px;
      box-shadow: 0px 10px 14px -7px #1C2F3E;
      background: linear-gradient(to bottom, #BDC6E5 5%, #1C2F3E 100%);
      background-color: #8f5c38;
      border-radius: 8px;
      display: inline-block;
      cursor: pointer;
      color: #ffffff;
      font-family: Arial;
      font-size: 20px;
      font-weight: bold;
      padding: 13px 32px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #3d768a;
    }
    button:hover {
      background: linear-gradient(to bottom, #1C2F3E 5%, #76A5D7 100%);
      background-color: #a89b8c;
      transform: scale(1.1);
    }
    button:active {
      position: relative;
      top: 1px;
    }
  }
`;
