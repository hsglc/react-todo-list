import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEdit} from '@fortawesome/free-solid-svg-icons';
import "../css/TodoForm.css";
function TodoForm(props) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      props.addTodo(value);
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
        <button type="submit" className="btn-edit">
  
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </form>
    );
  }

  export default TodoForm;