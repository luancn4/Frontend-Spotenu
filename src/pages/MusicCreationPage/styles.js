import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  background-color: #f2f2f2;
  color: #1c2f3e;
  padding: 0 4em;

  .wrapper {
    display: flex;
    width: 100%;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      h1 {
        font-size: 70px;
        margin-bottom: 0.7em;
        text-align: center;
      }

      section {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 70%;
        height: 20vh;
        padding: 1em;
        border-radius: 1.5em;
        background-color: #6c63ff;

        .styledInput {
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
              color: #1C2F3E;
              font-size: 1.2em;
          }
        }

        span {
          position: absolute;
          background-color: #3f3d56;
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

        select {
          background-color: #BDC6E5;
          font-size: 1.1em;
          padding: 0.5em;
          padding-right: 2.5em;
          border: 0;
          margin: 0;
          text-indent: 0.01px;
          text-overflow: "";
          -webkit-appearance: button; /* hide default arrow in chrome OSX */
        }

        button {
          width: 100%;
          z-index: 1;
          position: relative;
          font-size: inherit;
          font-family: inherit;
          color: #f2f2f2;
          padding: 0.5em 1em;
          outline: none;
          border: none;
          background-color: #3f3d56;
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
            background-color: #ff6584;
            transform-origin: left;
            transform: translate3d(50%, 50%, 0) scale3d(0, 0, 0);
            transition: transform 1s ease-in-out;
          }

          :hover {
            cursor: pointer;
            color: black;
          }

          :hover::before {
            transform: translate3d(100%, 100%, 0) scale3d(90, 90, 90);
          }
        }
      }
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }
`;
