import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskCard from "./components/TaskCard";
import AddTaskForm from './components/AddTaskForm';

function App() {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    
    return saved ? JSON.parse(saved) : [];
  });

  

  const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, { ...newTask, completed: false, isEditing: false }]);
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  const toggleCompleted = (index) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task));
  }

  const editTask = (index, updatedTask) => {
    setTasks(tasks.map((task, i) => i === index ? { ...task, ...updatedTask, isEditing: !task.isEditing } : task));
  }
  return (<div className="App">

    <AddTaskForm addTask={addTask} />
    <div className='task-card-component'>
      {tasks.map((task, index) => <TaskCard key={index} title={task.title} description={task.description} priorityPassed={task.priority} deadline={task.deadline} deleteTask={() => deleteTask(index)} completed={task.completed} toggleCompleted={() => toggleCompleted(index)} isEditing={task.isEditing} editTask={(updatedTask) => editTask(index, updatedTask)} />)}
    </div>
  </div>
  )
}

export default App
