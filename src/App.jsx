import TodoHeading from './Components/TodoHeading'
import TodoListWrapper from "./Components/TodoListWrapper"
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import { FlexColumn } from './Styles/FLex.styles'

function App() {

  const globalTheme = {
    colors: {
      primary: "#7678ed",
      secondary: "#3d348b",
      text: "#fff"
    }
  }

  const GlobalStyles = createGlobalStyle`
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

  return (
    <ThemeProvider theme={globalTheme}>
      <FlexColumn>
        <GlobalStyles />
        <TodoHeading />
        <TodoListWrapper />
    </FlexColumn>

    </ThemeProvider>
  )
}

export default App
