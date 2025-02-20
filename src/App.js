import React, { useState ,useEffect} from "react";
import "./App.css";
import ToDoItem from "./ToDoItem";

function App() {
  const [tasks, setTasks] = useState([]); 
  const [inputValue, setInputValue] = useState(""); 

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input
          className="input-task"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-task"onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;