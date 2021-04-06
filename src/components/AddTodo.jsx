import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from 'react';


function AddTodo(props) {


    const [todo, setTodo] = useState("");

    const preventDefault = (e) => {
        e.preventDefault();

        if (!todo) {
            alert("Please add a task description!");
            return;
        }

    }

    return (
        <div>
            <form onSubmit={preventDefault}>
                <input type="text" placeholder="Add todo..." onChange={evt => setTodo(evt.target.value)} />
                <button type="submit">
                    <FontAwesomeIcon icon={faEdit} />
                </button>

            </form>
        </div>
    )



}

export default AddTodo;