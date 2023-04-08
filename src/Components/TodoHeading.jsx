import React from 'react'
import todoImage from "../assets/to-do-list.png"

const TodoHeading = () => {
  return (
    <div style={{marginBottom: "30px"}}>
        <img style={{width: "60px", display: "block", margin: "0 auto 20px",}} src={todoImage} alt="todo list banner image" />
        <h1>To Do List</h1>
    </div>
  )
}

export default TodoHeading;