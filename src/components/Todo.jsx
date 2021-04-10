import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
function Todo(props) {
    return (
      <div
        className="todo"
        style={{ textDecoration: props.todo.isCompleted ? "line-through" : "" }}
      >
        {props.todo.text}
        <div>
          <button className="btn-check" onClick={() => props.completeTodo(props.index)}> <FontAwesomeIcon icon={faCheck} /> </button>
          <button className="btn-trash" onClick={() => props.removeTodo(props.index)}>  <FontAwesomeIcon icon={faTrash} />  </button>
        </div>
      </div>
    );
  }

  export default Todo;