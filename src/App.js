import React, { useState } from 'react';
import "./css/app.css";
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';



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

  const [finishedTodoNumber, setFinishedTodoNumber] = useState(0);

  const handleAddTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const handleCompleteTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    setFinishedTodoNumber(finishedTodoNumber +1);
  };

  const handleRemoveTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-list">
        <TodoForm addTodo={handleAddTodo} />
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={handleCompleteTodo}
            removeTodo={handleRemoveTodo}
          />
          
        ))}
        <div>Total Tasks : {todos.length}</div>
        <div>Finished Tasks: {finishedTodoNumber}</div>

      </div>
    </div>
  );
}

export default App;
