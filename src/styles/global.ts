import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff; 

    --background: #FFFEF0;
    --yellow: #F2EC54;
    --blue-100: #ebf8ff;
    --blue-300:  #3172b7;
    --green-100: #e6fffa;
    --green-400: #2e656a;
    --iris-100: #5D5FEF;
    --gray-300: #D4D4D8;
    --gray-600: #52525B;
    --red-700: #cc0000;
    --red-500: #c53030;
    --red-100: #fddede;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%; 
    }
  }
  body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3 ,h4, h5, h6, strong {
    font-weight: 700;
  }

  button { 
    cursor: pointer
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;