import React from 'react'
import ToDo from './ToDo'
import { TodoGlobalContext } from '../Context/Context' 

const ListContainer = () => {

  const {todoTasks} = TodoGlobalContext();

  // console.log(todoTasks)


  return (
    <div className='ListContainer'>
      {
        todoTasks.map( (todo) => (

          <ToDo key={todo.id} todoTask = {todo} />
        ) )
      }
  
    </div>
  )
}

export default ListContainer