import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${theme.colors.fonts.main};
    font-family: 'Baloo 2', cursive;
  }

  h1 {
    font-size: 3rem;
    font-weight: 500;
  }

  h2 {
    font-size: 2.875rem;
    font-weight: 500;
  }

  h2 b {
    color: #00FFD1;
    font-weight: 500;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
  }

  span {
    font-size: 1.25rem;
    font-weight: 400;
  }

  span b {
    font-weight: 500;
  }

  p {
    font-size: 1.875rem;
    font-weight: 400;
  }

  p b {
    font-weight: 500;
  }
`;
