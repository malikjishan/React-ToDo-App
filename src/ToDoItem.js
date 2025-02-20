import React from "react";

function ToDoItem({ task, deleteTask, toggleComplete }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
      <div>
        <button onClick={() => toggleComplete(task.id)}>Mark as Read</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ToDoItem;