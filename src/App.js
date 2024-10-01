import './App.css';
import Header from './MyComponents/Header';
  import { Footer } from './MyComponents/Footer';
import React, { useEffect, useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { Todos } from './MyComponents/Todos';



function App() {

  if(localStorage.getItem("todos")===null){
    localStorage.setItem("todos", JSON.stringify([]));
  }

  const addTodo = (title,desc)=>{
    console.log("I am adding this todo", title, desc);

    let sno;
    if(todos.length===0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);

    
    localStorage.setItem("todos", JSON.stringify([...todos, myTodo]));

    // useEffect(() => {
    //   localStorage.setItem("todos", JSON.stringify(todos));
    // }, [todos]);
    
  }

  const onDelete = (Todo)=>{
    console.log("I am ondelete of todo", Todo.title);

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    // Deleting this way in react works
    setTodos(todos.filter((e)=>{
      return e.sno!==Todo.sno;
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const [todos,setTodos] = useState(localStorage.getItem("todos").length===0?[]:JSON.parse(localStorage.getItem("todos"))
);

  return (
    // We can return only one tag in react component
    <>
    <Header title="My Todos List" searchBar={true} />
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
