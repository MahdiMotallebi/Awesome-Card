import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
      *,
      *::before,
      *::after{
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          outline: none;
      }

      body{
 
          width: 100%;
          font-size: 62.5%;
          overflow-x: hidden;
          font-family: ${({ theme }) => theme.typography.fontFamily};
          
          
      }

  `;
