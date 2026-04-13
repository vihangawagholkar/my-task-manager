import { useEffect, useState } from 'react'

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

  const deleteTask = (key) => {
    setTasks(prevTasks => prevTasks.filter((task) => key !== task.id));
  }

  const toggleCompleted = (key) => {
    setTasks(prevTasks => prevTasks.map((task) => key === task.id ? { ...task, completed: !task.completed } : task));
  }

  const toggleEdit = (key) => {
    setTasks(prevTasks => prevTasks.map((task) => 

      key === task.id ? {...task, isEditing: !task.isEditing} : task
    ))
  }

  const editTask = (key, updatedTask) => {
    setTasks(prevTasks => prevTasks.map((task) => key === task.id ? { ...task, ...updatedTask} : task));
  }
  return (<div className="App">

    <AddTaskForm addTask={addTask} />
    <div className='task-card-component'>
      {tasks.map((task) => <TaskCard key = {task.id} title={task.title} description={task.description} priorityPassed={task.priority} deadline={task.deadline} deleteTask={() => deleteTask(task.id)} completed={task.completed} toggleCompleted={() => toggleCompleted(task.id)} isEditing={task.isEditing} editTask={(updatedTask) => editTask(task.id, updatedTask)} toggleEdit = {() => toggleEdit(task.id)} />)}
    </div>
  </div>
  )
}

export default App
