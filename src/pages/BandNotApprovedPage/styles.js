import styled from "styled-components";
import bg from "./background.png";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  div {
    color: #1c2f6d;
    text-align: center;
    font-size: 30px;
    padding-top: 1.5em;
  }

  background-image: url(${bg});
  background-size: 100%;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    div {
      text-align: center;

      font-size: 19px;
      h1 {
        margin-bottom: 1em;
      }
    }
  }
`;
