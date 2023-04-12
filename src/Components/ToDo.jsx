import { useContext, useState } from 'react'
import { TodoContext } from '../Context/Context'
import { TodoButtons } from '../Styles/Button.styles'
import { TodoStyled } from '../Styles/TodoStyled.styles'
import { AiFillEdit , AiFillLike, AiFillRest, AiFillTool} from "react-icons/ai";
import { FcApproval } from "react-icons/fc";

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
            !showInput ? <TodoButtons
            onClick={() => {
              setShowInput((prevState) => !prevState)
            }}
          >
            <AiFillEdit />
          </TodoButtons> : <TodoButtons
              onClick={() => {
                updateNameHandler({taskId: todoTask.id, name: newName})
                setShowInput((prevState) => !prevState)
              }}
            >
              <AiFillTool />
            </TodoButtons>
          }
            <TodoButtons
              style={{marginInline: "20px"}}
              onClick={() => deleteFromTodoHandler(todoTask.id)}
            >
              <AiFillRest />
            </TodoButtons>
            <TodoButtons
              onClick={() => completeTodoHandler(todoTask.id)}
            >
              <AiFillLike />
            </TodoButtons>
          </>
        ) : (
          <p>Completed Task <FcApproval /> </p>
        )}
      </div>
    </TodoStyled>
  );
}

export default ToDo