import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import TodoItem from "./MyComponents/TodoItem";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const title = "Todos List";
  const searchBar = false;

  const onDelete = (todo) => {
    console.log("onDelete Called on", todo);
    setTodos(
      todos.filter((allTodos) => {
        return allTodos !== todo;
      })
    );
    localStorage.getItem("todos");
  };

  const addTodo = (title, desc) => {
    let sno;
    todos.length === 0 ? (sno = 0) : (sno = todos[todos.length - 1].sno + 1);

    // if(todos.length===0){
    //   sno=0;
    // }
    // else{
    //   sno=todos[todos.length-1].sno+1;
    // }
    const newTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="App">
        <Header searchBar={false} />
        <Switch>
        <Route exact path="/" render={() =>{
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              )
            }}>
            </Route>
          {/* <Route exact path="/" component={Todos} /> */}
          <Route path="/about">
               <About />
           </Route>
        
          {/* <Route exact path="/about" component={About} /> */}
        </Switch>
      </div>
    </Router>
  );
}

