import React from "react";
import {useState} from "react"

function NewTaskForm({categories, onTaskFormSubmit, }) {
  const [taskName, setTaskName] = useState('')
  const [taskCategory, setTaskCategory] = useState('All')

 function handleTaskChange(e){
  setTaskName(e.target.value)
 }

  function handleCategoryChange(e){
    setTaskCategory(e.target.value)
  }

  function handleTaskFormSubmit(event){
    event.preventDefault()
    const newTask = {text: taskName, category: taskCategory}
    onTaskFormSubmit(newTask)
    setTaskName('')
    setTaskCategory('All')
  }
  

const options = categories.map((category)=>{
        return   <option key={category} value={category}>{category}</option>})
  return (
    <form onSubmit={handleTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={(e) => handleTaskChange(e)} value={taskName} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange = {handleCategoryChange} value ={taskCategory} name="category">
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
