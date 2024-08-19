import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
     /* Scroll bar stilleri */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: black; 
  }

  ::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }


  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* Tüm elemanların kutu boyutunu kapsar */
    height: 100%;
    width: 100%;
    background-color: #121212; /*homepage arkaplan rengi*/

  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;
