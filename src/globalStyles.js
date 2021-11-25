import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    --color-bg-page: #000;
    --color-bg-primary: #f67900;
    --color-bg-topbar: #363636;
    --color-font: #313131;
    --color-font-recipe: #f8f8f8;
    --color-bg-ingredients: #fafafa;
    --color-bg-green: #63d900;
    --height-topbar: 70px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', Open-Sans,  Sans-Serif;
  }

  p, h1 {
    margin: 0;
    padding: 0;
  }
`;
