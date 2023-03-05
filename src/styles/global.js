import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;  
          }
              
          body {
          --webkit-font-smoothing: antialiased;
          background-color: #272727;
          color: #FFFFFF; 
          line-height: 160%;
          }
          body, input, textarea, button {
          font-family: 'Poppins', sans-serif;
          font-weight: 400;
          }

    /* 
              background: linear-gradient(138.24deg, #436CF9 23.58%, #001A30 161.54%, rgba(255, 255, 255, 0) 161.55%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent; */
`
