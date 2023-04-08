import { useContext, useState } from 'react'
import { TodoContext } from '../Context/Context'
import { StyledButton } from '../Styles/Button.styles'
import { TodoStyled } from '../Styles/TodoStyled.styles'

const ToDo = ({todoTask}) => {

  const [showInput, setShowInput] = useState(false)
  const [newName, setNewName] = useState(todoTask.taskName)
  const { deleteFromTodoHandler, completeTodoHandler, updateNameHandler } = useContext(TodoContext)



  return (
    <TodoStyled completed={todoTask.isCompleted}>
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
            !showInput ? <StyledButton
            onClick={() => {
              setShowInput((prevState) => !prevState)
            }}
          >
            Edit
          </StyledButton> : <StyledButton
              onClick={() => {
                updateNameHandler({taskId: todoTask.id, name: newName})
                setShowInput((prevState) => !prevState)
              }}
            >
              Update
            </StyledButton>
          }
            <StyledButton
              style={{marginInline: "10px"}}
              onClick={() => deleteFromTodoHandler(todoTask.id)}
            >
              dele
            </StyledButton>
            <StyledButton
              onClick={() => completeTodoHandler(todoTask.id)}
            >
              comp
            </StyledButton>
          </>
        ) : (
          <p>Completed Task</p>
        )}
      </div>
    </TodoStyled>
  );
}

export default ToDo