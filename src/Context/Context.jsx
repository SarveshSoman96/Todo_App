import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

const initialState = {
    todoTasks: [
        // {id: 1, taskName: "TodoApp", isCompleted: false },
        // {id: 2, taskName: "Crypto APp", isCompleted: false },
        // {id: 3, taskName: "Shopping Cart Responsive", isCompleted: false }
    ]
};

const TodoContext = createContext();


const TodoContextProvider = ({children}) => {

    const newState = JSON.parse(localStorage.getItem("tasks")) || initialState

    const [state, dispatch] = useReducer(reducer, newState)

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state))
    }, [state])


    const addTodoHandler = (todoObject) => {
        dispatch({
            type: "add_todo",
            payload: todoObject
        })
    };
    
    const deleteFromTodoHandler = (todoid) => {
        dispatch({
            type: "delete_todo",
            payload: todoid
        })
    };

    const completeTodoHandler = (todoid) => {
        dispatch({
            type: "complete_todo",
            payload: todoid
        })
    };
    const updateNameHandler = (todoid) => {
        dispatch({
            type: "update_todo",
            payload: todoid
        })
    };

    const clearState = () => {
        dispatch({
            type: "clear_todo"
        })
    };

    const completeAllTodo = () => {
        dispatch({
            type: "complete_All"
        })
    };

return (
    <TodoContext.Provider value={{...state , addTodoHandler, deleteFromTodoHandler, completeTodoHandler, updateNameHandler, clearState, completeAllTodo}}>
        {children}
    </TodoContext.Provider>
)

};

const TodoGlobalContext = () => {
    return useContext(TodoContext)
};

export {TodoContextProvider, TodoGlobalContext, TodoContext}