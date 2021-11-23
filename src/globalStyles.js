import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    --color-bg-page: #000;
    --color-bg-primary: #f67900;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', Open-Sans,  Sans-Serif;
  }
`;
