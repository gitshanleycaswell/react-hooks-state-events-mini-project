import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from "react"

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [tasks, setTasks] = useState(TASKS)
const [filterBy, setFilterBy] = useState('All')

const tasksToDisplay = tasks.filter((task) => {
  if(filterBy === 'All'){
    return true
  } else {
    return task.category === filterBy
  }
})

function handleFilterChange(category){
  setFilterBy(category)
}
  
function deleteTask(text){
  setTasks(currentTasks => currentTasks.filter(task => task.text !== text))
}

function handleSubmittedItem(newTask){
  setTasks([...tasks, newTask])
}
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleFilterChange={handleFilterChange} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES}  onTaskFormSubmit={handleSubmittedItem}/>
      <TaskList tasks={tasksToDisplay} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
