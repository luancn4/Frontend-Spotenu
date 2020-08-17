import styled from "styled-components";
import bg from "./background.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: contain;
  color: #1c2f3e;

  header {
    padding: 0 6em 0 10em;

    display: flex;
    justify-content: space-between;
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

  .wrapper {
    padding: 5em;
    display: flex;
    height: 100%;
    width: 100%;

    .albums {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .creation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      h1 {
        text-align: center;
        font-size: 70px;

        width: 50%;
      }

      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 20vh;
        padding: 1em;
        border-radius: 1.5em;
        font-weight: 500;

        .divizona {
          position: relative;
          margin-bottom: 0.5em;
        }

        input {
          width: 100%;
          font-weight: 400;
          background-color: #bdc6e5;
          padding: 0.35em 0.45em;
          border: 7px solid transparent;
          transition: background-color 0.3s ease-in-out;
          :focus {
            outline: none;
          }

          ::placeholder {
            color: hsla(0, 0%, 100%, 0.6);
          }
        }

        span {
          position: absolute;
          background-color: #a9a9a9;
          transition: transform 0.5s ease;
        }

        .bottom,
        .top {
          height: 3px;
          left: 0;
          right: 0;
          transform: scaleX(0);
        }

        .left,
        .right {
          width: 3px;
          top: 0;
          bottom: 0;
          transform: scaleY(0);
        }

        .bottom {
          bottom: 0;
          transform-origin: bottom right;
        }

        input:focus ~ .bottom {
          transform-origin: bottom left;
          transform: scaleX(1);
        }

        .right {
          right: 0;
          transform-origin: top right;
        }

        input:focus ~ .right {
          transform-origin: bottom right;
          transform: scaleY(1);
        }

        .top {
          top: 0;
          transform-origin: top left;
        }

        input:focus ~ .top {
          transform-origin: top right;
          transform: scaleX(1);
        }

        .left {
          left: 0;
          transform-origin: bottom left;
        }

        input:focus ~ .left {
          transform-origin: top left;
          transform: scaleY(1);
        }

        button {
          width: 100%;
          z-index: 1;
          position: relative;
          font-size: inherit;
          font-family: inherit;
          color: #1c2f3e;
          padding: 0.5em 1em;
          outline: none;
          border: none;
          background-color: #a9a9a9;
          overflow: hidden;
          transition: color 0.4s ease-in-out;

          ::before {
            content: "";
            z-index: -1;
            position: absolute;
            bottom: 100%;
            right: 100%;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            background-color: #1c2f3e;
            transform-origin: left;
            transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
            transition: transform 1s ease-in-out;
          }

          :hover {
            cursor: pointer;
            color: #f2f2f2;
          }

          :hover::before {
            transform: translate3d(100%, 100%, 0) scale3d(90, 90, 90);
          }
        }
      }
    }
  }
`;
