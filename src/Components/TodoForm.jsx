import { useState, useContext } from 'react'
// import { TodoGlobalContext } from '../Context/Context';
import { TodoContext } from '../Context/Context';
import { FlexRow } from '../Styles/FLex.styles';
import { TodoInputStyled } from '../Styles/TodoWrapper.styles';
import { FormButtonStyled } from '../Styles/Button.styles';

const  TodoForm = () => {

  const { addTodoHandler } = useContext(TodoContext)
  const [todoName, setTodoName] = useState("")


  const todoSubmitHandler = (e) => {
    e.preventDefault()

    if(todoName){
      addTodoHandler({id: Math.round(Math.random() * 100), name: todoName})
      setTodoName("")
    }
    else{
      alert("Enter a todo task")
    }
  };

  return (
    <form onSubmit={todoSubmitHandler}>
        <FlexRow>
            <TodoInputStyled type="text" value={todoName} placeholder='Add your Todo' onChange={(e) => setTodoName(e.target.value)}/>
            <FormButtonStyled>+</FormButtonStyled>
        </FlexRow>
    </form>
  )
}

export default TodoForm;