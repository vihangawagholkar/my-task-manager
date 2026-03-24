import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  TaskCard  from "./components/TaskCard";
import AddTaskForm from './components/AddTaskForm';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  }
  return (<div className="App">
      
      <AddTaskForm addTask = {addTask}/>
      <div className='task-card-component'>
      {tasks.map((task, index) => <TaskCard key = {index} title={task.title} description={task.description} priorityPassed={task.priority} deadline={task.deadline} deleteTask={() => deleteTask(index)}/>)}
      </div>
    </div>
  )
}

export default App
