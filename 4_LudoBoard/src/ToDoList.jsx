import { useState } from "react";
import "./ToDoList.css";
import { v4 as uuidv4 } from "uuid";



export default function ToDoList(){
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4(), isDone:false }]);

    let [newToDo, setNewToDo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newToDo, id: uuidv4(), isDone:false }];
        });
        setNewToDo("");
    }

    let updateToDoValue = (event) => {
        setNewToDo(event.target.value);
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

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
                        <span style={todo.isDone ? {textDecoration: "line-through"} : {}}>{todo.task}</span>
                        <div className="btn-group">
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}