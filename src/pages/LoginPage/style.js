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
          background-color: #F3705A;
        }
      }

      p {
        margin-top: 1em;
        text-align: center;

        span:hover {
          color: #C51162;
          cursor: pointer;
        }
      }
    }
  }
`;
