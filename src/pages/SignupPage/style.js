import styled from "styled-components";

export const Container = styled.div`
padding: 0 4em;
  display: flex;
  height: 100%;
  background-color: #bdc6e5;
  color: #1C2F3E;

  .background {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    width: 100%;
  }

  .formWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    form {
      background-color: #f2f2f2;
      background-size: 100%;
      padding: 1.5em;
      border-radius: 1.5em;
      display: flex;
      flex-direction: column;

      h1 {
        margin-bottom: 0.7em;
      }
      .inputs {
        width: 100%;
        margin-bottom: 1em;
      }

      .button {
        margin-top: 1em;

        :hover {
          transform: scale(1.03);
          background-color: #bdc6e5;
          color: black;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0 1.5em;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .background {
      display: none;
    }

    .formWrapper {
      z-index: 1;
    }
  }
`;
