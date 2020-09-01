import styled from "styled-components";
import bg from "./background.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: whitesmoke;
  color: #1c2f3e;

  .flex {
    display: flex;
    padding: 0 1em;

    .center {
      display: flex;
      flex-direction: column;
      align-items: center;

      input {
        padding: 0.5em 0.1em;
        width: 50vw;
        height: 6vh;
        font-size: 60px;
        margin-bottom: 0.1em;
        border-radius: 0.3em;

        ::placeholder {
          font-size: 0.7em;
          color: #312f3e;
        }
      }

      .bands {
        background-image: url(${bg});
        display: flex;
        flex-direction: column;
        justify-content: start;
        background-color: #e6e6e6;
        width: 50vw;
        min-height: 60vh;
        max-height: 61vh;
        overflow-y: scroll;
        padding: 1em;
        border-radius: 1.5em;
        font-weight: 500;

        ul {
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 2em;
            font-weight: bold;
            margin-top: 0.5em;
            border-bottom: 1px solid black;
            :hover {
              background-color: lightgoldenrodyellow;
            }

            div {
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .flex {
      .center {
        input {
          width: 90vw;
        }
        .bands {
          width: 90vw;
          height: 100%;
        }
      }
    }
  }
`;
