import { useContext } from 'react'
import { TodoContext } from '../Context/Context'

const TodoFooter = () => {

 const { clearState, todoTasks } = useContext(TodoContext)

  const completed = todoTasks.filter(todo => todo.isCompleted === true)

  return (
    <div className='todo_status_wrapper'>

      <button type='button' onClick={() => clearState()}>Clear All</button>

          <p className="todo_status_info">You have <span className='todo_count'> {todoTasks.length}</span> todos. Completed: <span className='todo_count'>{completed.length}</span></p>
      
      <button type='button'>Complete All</button>

    </div>
  )
}

export default TodoFooter