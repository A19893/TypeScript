import React from 'react'
import { useAppSelector } from '../store/hooks'
const Todolist = () => {
  const TodoList=useAppSelector((state)=>state.todos.todoList)
  return (
    <>
    {
      TodoList.map(({name})=>{
        return(
          <>
           {name}<br/>
          </>
        )
      })
    }
    </>
  )
}

export default Todolist