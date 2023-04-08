import { useState, useContext } from 'react'
// import { TodoGlobalContext } from '../Context/Context';
import { TodoContext } from '../Context/Context';

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
        <div style={{display: "flex",alignItems: "center", justifyContent: "space-between", gap: "15px"}}>
            <input className='todo_input' type="text" value={todoName} placeholder='Add your Todo' onChange={(e) => setTodoName(e.target.value)}/>
            <button className='addToDo'>+</button>
        </div>
    </form>
  )
}

export default TodoForm;