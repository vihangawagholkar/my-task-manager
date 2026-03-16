import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  TaskCard  from "./components/TaskCard";
function App() {

  const tasks = [
    {title: "Study", description: "Finish assignment", priority: "High", deadline: "Midnight"},
    {title: "Workout", description: "Legs", priority: "Medium", deadline: "6 pm"}
    
]


  return (<div className="App">
      
      <div className='task-card-component'>
      {tasks.map(task => <TaskCard title={task.title} description={task.description} key={task.title} priorityPassed={task.priority} deadline={task.deadline}/>)}
      </div>
    </div>
  )
}

export default App
