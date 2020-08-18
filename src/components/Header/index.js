import React from "react";
import styled from "styled-components";
import { GiMusicalScore } from "react-icons/gi";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 10vh;
  text-align: center;
  top: 0;
  width: 100vw;

  div {
    display: flex;
    align-items: center;
    padding: 0.8em;
    font-size: 25px;
  }

  svg {
    height: 30px;
    width: 33px;
  }

  ul {
    display: flex;
    li {
      strong {
        padding: 0.8em;
        font-size: 25px;
      }
    }
  }

  .logout {
    :hover {
      background-color: lightgoldenrodyellow;
      cursor: pointer;
    }
  }
`;

function Header() {
  return (
    <Container>
      <div>
        <GiMusicalScore />
        <strong>SPOTENU</strong>
      </div>
      <ul>
        <li>
          <strong className="logout">BANDAS</strong>
        </li>
        <li>
          <strong className="logout">MÚSICAS</strong>
        </li>
        <li>
          <strong className="logout">GÊNEROS</strong>
        </li>
        <li>
          <strong className="logout">LOGOUT</strong>
        </li>
      </ul>
    </Container>
  );
}

export default Header;
