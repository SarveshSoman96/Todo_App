import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    min-height: 100vh;
    min-width: 320px;
    background-color: ${ ({theme}) => theme.colors.primary};
    padding: 2rem 0;
  }

  
  h1{
    color: ${ ({theme}) => theme.colors.secondary};
  }
  
  `

export const Container = styled.div`
      padding-inline: 20px;
  `
  