import React from 'react'

const Todo = (props) => {
const {index,task}=props
  return (
    <div>
         <li key={index}>
        {task}
        </li>
    </div>
  )
}
export default Todo
