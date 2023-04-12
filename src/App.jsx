import TodoHeading from './Components/TodoHeading'
import TodoListWrapper from "./Components/TodoListWrapper"
import { ThemeProvider} from 'styled-components'
import { FlexColumn } from './Styles/FLex.styles'
import { GlobalStyles } from './Styles/Global.styles'

function App() {

  
  
 

  const globalTheme = {
    colors: {
      primary: "#7678ed",
      secondary: "#3d348b",
      text: "#fff"
    },
    media: {
      tablet: "768px",
      mobile: "580px"
    }
  }

  

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
