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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    h1 {
      font-size: 70px;
      text-align: center;
      margin-bottom: 0.1em;
    }

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

      ul {
        li {
          margin-bottom: 1em;
          border-bottom: 1px solid black;

          :hover {
            background-color: lightgoldenrodyellow;
            cursor: pointer;
          }
        }
      }

      .divizona {
        position: relative;
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
      }

      button::before {
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

      button:hover {
        cursor: pointer;
        color: #f2f2f2;
      }

      button:hover::before {
        transform: translate3d(100%, 100%, 0) scale3d(90, 90, 90);
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .background {
      display: none;
    }

    .genreWrapper {
      h1 {
        font-size: 40px;
        margin-bottom: .8em;
      }

      .genres {
        width: 80vw;
      }
    }
  }
`;
