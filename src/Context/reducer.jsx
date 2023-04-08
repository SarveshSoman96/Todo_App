
export const reducer = (state, action) => {


  switch (action.type) {
    case "add_todo":


    // let unique_id = 
    let new_task = {id: action.payload.id, taskName: action.payload.name, isCompleted: false}
    // console.log(new_task)

      return{
        ...state,
        todoTasks: [new_task, ...state.todoTasks]
      }

    case "delete_todo":

      let dele_todo = state.todoTasks.find( todo => todo.id === action.payload)

      let final_list = state.todoTasks.filter( todo => todo.id !== dele_todo.id)

    return{
      ...state,
      todoTasks: final_list
    }

    case "complete_todo":

    let complete_todo = state.todoTasks.map(todo => {
      if(todo.id === action.payload){
        return { ...todo, isCompleted: true }
      }

      return todo;
    })

    console.log(complete_todo)

    return{
      ...state,
      todoTasks: complete_todo
    }

    case "update_todo":

    const newUpdatedList = state.todoTasks.map( todo => {
      if(todo.id === action.payload.taskId){
        todo.taskName = action.payload.name
      }
      
      return todo
    }
      )

      return {
        ...state,
        todoTasks: newUpdatedList
      }

    case "clear_todo":

    return {
      ...state,
      todoTasks: []
    }

    case "complete_All":

      const completedAllTodoList = state.todoTasks.map((todo) => {
         if (!todo.isCompleted){
            return todo.isCompleted = true
          }

          return todo
      })

      return {
        ...state,
        todoTasks: completedAllTodoList
      }

    default:
      return state;
  }
};