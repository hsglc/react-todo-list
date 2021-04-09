import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./css/app.css";
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';



function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button className="btn-check" onClick={() => completeTodo(index)}> <FontAwesomeIcon icon={faCheck} /> </button>
        <button className="btn-trash" onClick={() => removeTodo(index)}>  <FontAwesomeIcon icon={faTrash} />  </button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      placeholder="Add task..."
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">

        <FontAwesomeIcon icon={faEdit} />
      </button>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-list">
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
          
        ))}
        <div>Total Tasks : {todos.length}</div>
        

      </div>
    </div>
  );
}

export default App;
