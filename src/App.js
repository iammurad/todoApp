import { React, useState, useEffect } from 'react'
import Form from './components/Form/Form';
import Todolist from './components/Todolist/Todolist';
import './App.css';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

    
useEffect(()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo=>todo.completed===true))
        break;
        case 'uncompleted':
        setFilteredTodos(todos.filter(todo=>todo.completed===false))
        break;
    default:
    setFilteredTodos(todos);
    break;
  }
},[todos,status])
  useEffect(() => {
    if (!localStorage.getItem("todos")) {
      (localStorage.setItem("todos", JSON.stringify([])))
    } else {
      let dataValue = JSON.parse(localStorage.getItem("todos"))
      setTodos(dataValue)
    }
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form setTodos={setTodos}
       inputText={inputText} 
       todos={todos} 
       setInputText={setInputText}
       setStatus = {setStatus}
      //  status = {status}
       />
      <Todolist setTodos={setTodos} filteredTodos = {filteredTodos} todos={todos} />
    </div>
  );
}

export default App;
