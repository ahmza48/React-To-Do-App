import React, { useState } from "react";



const AddTodo = (props) => {
  const [title,setTitle]=useState("");
  const [desc,setDescription]=useState("");
  
  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc){
        alert('Title or Description cannot be blank!');
    }
    else{
        props.addTodo(title,desc);
        setTitle("");
        setDescription("");
    }

  }
    return (
    <div className="container my-3">
        <h3 className='text-center'>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />

        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setDescription(e.target.value)}}
            className="form-control"
            id="description"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
