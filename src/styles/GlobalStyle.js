import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    padding-top: 80px; /* To offset fixed navbar */
  }
`;

export default GlobalStyle;