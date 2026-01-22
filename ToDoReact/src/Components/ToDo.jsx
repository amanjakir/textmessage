import axios from "axios";
import { useState, useEffect } from "react";

function ToDo(){
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");
    useEffect(() => {
        fetchTask();
    }, []);
    const fetchTask = async() => {
        try {
            const response=await axios.get("http://127.0.0.1:8000/")
            setTodos(response.data);

        }
        catch (error) {
            alert("Error fetching tasks");
        } 
    }

    const addTask = async () => {
        if (!task.trim()){
            alert("Task cannot be empty");
        return;
    }
    try{
        await axios.post("http://127.0.0.1:8000/add-task/", {task: "Task", is_completed: false });
        setTask("");
        fetchTask();
    }
    catch (error) {
        alert("Error adding task");
    }
};

    const startEdit = (todo) => {
        setEditingId(todo.id);
        setEditingText(todo.task);
    }

    const cancelEdit = () => {
        setEditingId(null);
        setEditingText("");
    }

    const updateTask = async (todo) => {
        const response = await axios.patch(`http://127.0.0.1:8000/edit-task/${todo.id}`, {is_completed: !todo.is_completed})
        fetchTask();
        alert("Task updated successfully");
    }

    const saveEdit = async (todo) => {
        try {
            const response = await axios.put(`http://127.0.0.1:8000/edit-task/${todo.id}`, {task: editingText,is_completed: todo.is_completed})
            fetchTask();
            cancelEdit()
            alert("Task updated successfully");
        } catch (error) {
            alert("Error updating task");   
        }              
           
        }

    const deleteTask = async (todo) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/edit-task/${todo.id}`)
            fetchTask();
            alert("Task deleted successfully");
        } catch (error) {
            alert("Error deleting task");   
        }
        }

    return (
        <div>
            <h1>To-Do List</h1>
            <input type="text" placeholder="enter new task" 
            value={task} onChange={(e) => setTask(e.target.value)}/>
            <button  onClick={addTask}>Add Task</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.is_completed} onChange={()=>updateTask(todo)}/>
                        {editingId === todo.id ? <>
                            <input type="text" value={editingText} onChange={(e)=>setEditingText(e.target.value)}/>
                            <button onClick={()=>saveEdit(todo)}>save</button>

                            <button onClick={cancelEdit}>Cancel</button>

                            </>: <>{todo.is_completed ? <s>{todo.task}</s> : todo.task} <button onClick= {()=>startEdit(todo)}>Edit</button>
                            <button onClick={()=>deleteTask(todo)}>Delete</button>
                            
                        </>}
                       
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default ToDo;