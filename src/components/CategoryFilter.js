import React from "react";
import {useState} from "react"

function CategoryFilter({categories, handleFilterChange}) {
const [selectedCategory, setSelectedCategory] = useState(null)
function handleButton(category){
  handleFilterChange(category)
  setSelectedCategory(category)
}

  const eachCategory = categories.map((category) => {
    return <button 
            key={category}
            onClick={() => handleButton(category)} 
            className={selectedCategory === category ? "selected" : ""}
            >
              {category}
              </button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {eachCategory}
    </div>
  );
}

export default CategoryFilter;
