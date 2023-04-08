import { useContext } from 'react'
import { TodoContext } from '../Context/Context'
import { FooterStyled, TodoStatusInfo } from '../Styles/TodoFooter.styles'
import { StyledButton } from '../Styles/Button.styles'

const TodoFooter = () => {

 const { clearState, todoTasks, completeAllTodo } = useContext(TodoContext)

  const completed = todoTasks.filter(todo => todo.isCompleted === true)

  return (
    <FooterStyled>

      <StyledButton bg="#7678ed" onClick={() => clearState()}>Clear All</StyledButton>

          <TodoStatusInfo>You have <span className='todo_count'> {todoTasks.length}</span> todos. Completed: <span className='todo_count'>{completed.length}</span></TodoStatusInfo>
      
      <StyledButton bg="#7678ed" onClick={() => completeAllTodo()}>Complete All</StyledButton>

    </FooterStyled>
  )
}

export default TodoFooter