import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  TaskCard  from "./components/TaskCard";
import AddTaskForm from './components/AddTaskForm';

function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, {...newTask, completed : false}]);
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  const toggleCompleted = (index) => {
    setTasks(tasks.map((task, i) => i === index ? {...task, completed: !task.completed} : task));
  }
  return (<div className="App">
      
      <AddTaskForm addTask = {addTask}/>
      <div className='task-card-component'>
      {tasks.map((task, index) => <TaskCard key = {index} title={task.title} description={task.description} priorityPassed={task.priority} deadline={task.deadline} deleteTask={() => deleteTask(index)} completed = {task.completed} toggleCompleted={() => toggleCompleted(index)}/>)}
      </div>
    </div>
  )
}

export default App
