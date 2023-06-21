import React from "react";
import Task from "./Task"
import {useState} from "react"


function TaskList({tasks, deleteTask}) {
  

  

  const individualTasks = tasks.map((task) => {
    return <Task 
            key ={task.text}
            text ={task.text}
            category={task.category}
            deleteTask={deleteTask} />
  })
  return (
    <div className="tasks">
      {individualTasks}
    </div>
  );
}

export default TaskList;
