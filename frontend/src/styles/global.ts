import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.colors.fonts.main};
    font-family: 'Lexend Deca', sans-serif;
  }

  h1 {
    font-size: 2.5vw;
    font-weight: 400;
  }

  h2 {
    font-size: 2.395vw;
    font-weight: 400;
  }

  h2 b {
    color: #00FFD1;
    font-weight: 400;
  }

  h3 {
    font-size: 1.65vw;
    font-weight: 400;
  }

  span {
    font-size: 1.04vw;
    font-weight: 400;
  }

  span b {
    font-weight: 400;
  }

  p {
    font-size: 1.5625vw;
    font-weight: 300;
  }

  p b {
    font-weight: 400;
  }
`;
