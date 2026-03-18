import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  TaskCard  from "./components/TaskCard";
import AddTaskForm from './components/AddTaskForm';

function App() {

  const [tasks, setTask] = useState([]);

  const addTask = (newTask) => {
    setTask([...tasks, newTask]);
  }

  return (<div className="App">
      
      <AddTaskForm addTask = {addTask}/>
      <div className='task-card-component'>
      {tasks.map(task => <TaskCard title={task.title} description={task.description} key={task.title} priorityPassed={task.priority} deadline={task.deadline}/>)}
      </div>
    </div>
  )
}

export default App
