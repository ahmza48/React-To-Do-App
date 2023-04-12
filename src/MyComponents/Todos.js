import React from 'react'
import TodoItem from '../MyComponents/TodoItem';
const Todos = (props) => {
  let todoStyle={
    minHeight: "70vh"
  }
  return (
    <div className='container my-3' style={todoStyle}>
      <h3 className='text-center my-3'>Todos List</h3>
      {/* <TodoItem todo={props.todos[0]}/> */}
      {props.todos.length===0 ? <><h3>Enter Some Todos</h3></> : 
      props.todos.map((todo)=>{
        return (
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          )
      })}


      {/* <>
        {
          for(let x of props.todos){


          }
        }
        {props.todos[0]}
      </> */}
    </div>
  )
}

export default Todos
