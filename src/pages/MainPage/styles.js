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
    border: 12px outset #1c2f3e;
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
    width: 100%;
    padding: 0 20em;

    button {
      width: 250px;
      z-index: 1;
      position: relative;
      font-size: inherit;
      font-family: inherit;
      color: white;
      padding: 0.5em 1em;
      outline: none;
      border: none;
      background-color: hsl(236, 32%, 26%);
    }

    button::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #fc2f70;
      transform-origin: center right;
      transform: scaleX(0);
      transition: transform 0.25s ease-in-out;
    }

    button:hover {
      cursor: pointer;
    }

    button:hover::before {
      transform-origin: center left;
      transform: scaleX(1);
    }

    .secondButton:hover::before {
      transform-origin: center right;
      transform: scaleX(1);
    }
    
  }

  @media screen and (max-width: 1024px) {
    padding: 3em 0;
    text-align: center;
    justify-content: space-evenly;

    h1 {
      padding: 0;
      font-size: 5em;
      border: none;
    }

    h3 {
      font-size: 1.7em
    }

    .buttons {
      padding: 0;
      height: 15vh;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
