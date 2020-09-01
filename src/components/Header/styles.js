import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 10vh;
  text-align: center;
  top: 0;
  width: 90%;

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

  .menuItems {
    :hover {
      background-color: lightgoldenrodyellow;
      cursor: pointer;
    }
  }

  #inicio {
    display: ${(props) => (props.i ? "" : "none")};
  }
  #bandas {
    display:  ${(props) => (props.b ? "" : "none")};
  }
  #albuns {
    display:  ${(props) => (props.a ? "" : "none")};
  }
  #musicas {
    display:  ${(props) => (props.m ? "" : "none")};
  }
  #generos {
    display:  ${(props) => (props.g ? "" : "none")};
  }

  @media screen and (max-width: 1024px) {
    div {
      display: none;
    }
  }
`;
