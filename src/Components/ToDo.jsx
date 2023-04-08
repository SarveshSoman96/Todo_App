import { useContext, useState } from 'react'
import { TodoContext } from '../Context/Context'

const ToDo = ({todoTask}) => {

  const [showInput, setShowInput] = useState(false)
  const [newName, setNewName] = useState(todoTask.taskName)
  const { deleteFromTodoHandler, completeTodoHandler, updateNameHandler } = useContext(TodoContext)



  return (
    <div className={`todo ${todoTask.isCompleted ? "completed_task" : ""}`}>
      {!showInput ? (
        <div className="todoName">{todoTask.taskName}</div>
      ) : (
        <input
          className="edit_todo"
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      )}
      <div className="buttons">
        {!todoTask.isCompleted ? (
          <>
          {
            !showInput ? <button
            className="edit btn"
            onClick={() => {
              setShowInput((prevState) => !prevState)
            }}
          >
            Edit
          </button> : <button
              className="edit btn"
              onClick={() => {
                updateNameHandler({taskId: todoTask.id, name: newName})
                setShowInput((prevState) => !prevState)
              }}
            >
              Update
            </button>
          }
            <button
              className="dele btn"
              onClick={() => deleteFromTodoHandler(todoTask.id)}
            >
              dele
            </button>
            <button
              className="comp btn"
              onClick={() => completeTodoHandler(todoTask.id)}
            >
              comp
            </button>
          </>
        ) : (
          <p>Completed Task</p>
        )}
      </div>
    </div>
  );
}

export default ToDo