import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: boder-box;
  }

  *,*:before {
    box-sizing: inherit;
  }

  body {
    background-color: ${colors.white};
  }
`;

export default GlobalStyle;
