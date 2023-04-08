import React from 'react'
import todoImage from "../assets/to-do-list.png"
import { Header } from '../Styles/TodoHeading.styles'

const TodoHeading = () => {
  return (
    <Header>
        <img src={todoImage} alt="todo list banner image" />
        <h1>To Do List</h1>
    </Header>
  )
}

export default TodoHeading;