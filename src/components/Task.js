import React from "react";
import {useState} from "react"

function Task({text, category, deleteTask}) {
const [deleted, setDelete] = useState(false)

function handleDelete(){
  deleteTask(text)
}
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDelete} className="delete">X</button>
    </div>
  );
}

export default Task;
