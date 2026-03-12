import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  TaskCard  from "./components/TaskCard";
function App() {
  return (<div className="App">
      {/* <h1>My Task Manager</h1> */}
      <TaskCard task={{ id: 1, title: 'Sample Task', description: 'This is a sample task.', completed: false }} onDelete={() => {}} onToggle={() => {}} />
    </div>
  )
}

export default App
