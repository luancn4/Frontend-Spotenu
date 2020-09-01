import styled from "styled-components";

export const Container = styled.div`
  padding: 0 4em;
  display: flex;
  height: 100%;
  background-color: #4a82ba;
  color: #1c2f3e;

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
      padding: 2em;
      border-radius: 1.5em;
      display: flex;
      flex-direction: column;
      justify-content: center;

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
          background-color: #f3705a;
        }
      }

      p {
        margin-top: 1em;
        text-align: center;

        span:hover {
          color: #c51162;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 0 2em;
    text-align: center;

    .background {
      display: none;
    }
    .formWrapper {
      z-index: 1;
    }
  }
`;
