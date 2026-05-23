import { useState } from "react";


export default function ToDoList(){
    let [todos, setTodos] = useState(["sample task"]);

    let [newToDo, setNewToDo] = useState([]);

    let addNewTask = () => {
        setTodos([...todos, newToDo]);
    }

    let updateToDoValue = (event) => {
        setNewToDo(event.target.value);
    }

    return (
        <div>
            <br /><br />
            <input placeholder="add a task" type="text" value={newToDo} onChange={updateToDoValue}></input>
            <br />

            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br /><br />
            <hr />
            
            <h2>Tasks ToDo</h2>

            <ul>
                {todos.map((todo) => (
                    <li>{todo}</li>
                ))}
            </ul>
        </div>
    );
}