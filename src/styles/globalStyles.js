import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap');
  body {
    margin: 0;
    padding: 0;
    outline: 0;        
    box-sizing: border-box
  }

  *:focus {
    outline:0;
  }

  html, body, #root {
    height: 100%;
  }

  body {    
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }


`;

export default GlobalStyle;
