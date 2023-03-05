import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  body {
    background: ${({ theme }) => theme.bg};
    font-family: "Barlow Semi Condensed", sans-serif;
  }

  
  a{
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }

`;
