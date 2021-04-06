import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import React, { useState } from 'react';


function TodoList(props)  {

    
    const [todoList, setTodoList] = useState([]);


    return(
        <div>
            <AddTodo />
        </div>
    )
   

}
export default TodoList;