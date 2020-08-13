import styled from "styled-components";

export const Container = styled.div`
  padding: 4em;
  display: flex;
  height: 100%;
  background-color: #bdc6e5;
  color: #1c2f3e;

  .background {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    width: 100%;
  }

  .genreWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    .genres {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #e6e6e6;
      width: 100%;
      min-height: 50vh;
      padding: 1em;
      border-radius: 1.5em;
      font-weight: 500;

      h1 {
        margin-bottom: 0.7em;
      }

      ul {

        li {
          margin-bottom: 0.5em;
          border-bottom: 1px solid black;

          :hover {
          background-color: lightgoldenrodyellow;
          cursor:pointer;
        }
        }
      }

      input {
        width: 100%;
      }

      button {
        width: 100%;
      }
    }
  }
`;
