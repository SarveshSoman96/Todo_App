import React from 'react'
import ToDo from './ToDo'
import { TodoGlobalContext } from '../Context/Context'
import { TodoListContainerStyled } from '../Styles/TodoWrapper.styles' 

const ListContainer = () => {

  const {todoTasks} = TodoGlobalContext();

  return (
    <TodoListContainerStyled>
      {
        todoTasks.map( (todo) => (

          <ToDo key={todo.id} todoTask = {todo} />
        ) )
      }
  
    </TodoListContainerStyled>
  )
}

export default ListContainer