import { useState } from "react";
import "./ToDoList.css";
import { v4 as uuidv4 } from "uuid";



export default function ToDoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4()}]);

    let [newToDo, setNewToDo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newToDo, id: uuidv4()}];
        });
        setNewToDo("");
    }

    let updateToDoValue = (event) => {
        setNewToDo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
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
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}