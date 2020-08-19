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
`;
