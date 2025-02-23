import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
//
function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
//

function filterByCategories(e) {
  const filteredTasks = TASKS.filter((task) => {
   if(e.target.value === 'All') 
   return true
   else return task.category === e.target.value
    })
   setTasks(filteredTasks)
 }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} categoriesFilter={filterByCategories} />
      <NewTaskForm />
      <TaskList tasks={tasks}  />
    </div>
  );
}

export default App;
