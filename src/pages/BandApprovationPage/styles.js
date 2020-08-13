import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: white;
  color: #1c2f3e;

  header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 10vh;
    text-align: center;
    top: 0;

    > div {
      display: flex;
      align-items: center;
    }
    svg {
      height: 30px;
      width: 33px;
    }

    strong {
      padding: 1em;
      font-size: 25px;
    }

    .logout {
      :hover {
        background-color: lightgoldenrodyellow;
        cursor: pointer;
      }
    }
  }

  .flex {
    display: flex;
    padding: 0 1em;

    .right {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 80px;
        margin-bottom: 0.5em;
      }

      .bands {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: #e6e6e6;
        width: 100%;
        min-height: 50vh;
        padding: 1em;
        border-radius: 1.5em;
        font-weight: 500;

        ul {
          border-bottom: 1px solid black;
          :hover {
            background-color: lightsalmon;
          }

          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 2em;

            div {
              display: flex;
              align-items: center;
            }
            button {
              margin-right: .3em;
              z-index: 1;
              position: relative;
              color: white;
              padding: 0.5em 1em;
              outline: none;
              border: none;
              background-color: hsl(236, 32%, 26%);
              :hover {
                cursor: pointer;
              }

              ::before {
                content: "";
                z-index: -1;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                border: 4px solid hsl(236, 32%, 26%);
                transform-origin: center;
                transform: scale(1);
              }

              :hover::before {
                transition: all 0.75s ease-in-out;
                transform-origin: center;
                transform: scale(1.75);
                opacity: 0;
              }
            }
          }
        }
      }
    }
  }
`;
