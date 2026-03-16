// Import component-specific styles
import './TaskCard.css';

// Import React hook for managing state inside the component
import { useState } from 'react';

// TaskCard component represents a single task in the UI
function TaskCard({title, description, priorityPassed, deadline}) {

  // Available priority options for the dropdown
  const options = ['High', 'Medium', 'Low'];

  console.log(priorityPassed);
  
  // React state to track the currently selected priority
  // Default value is the first option ("High")
  const [priority, setPriority] = useState(priorityPassed);

  const [open, setOpen] = useState(false);

  // Event handler that runs whenever the dropdown selection changes
  // Updates the priority state with the selected value
  const handleChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    
    // Main container for the task card
    <div className="task-card">

      {/* Task title */}
      <h2 className="task-title">{title}</h2>

      {/* Short description of the task */}
      <div className="task-description">{description}</div> 

      {/* Container for metadata such as priority and deadline */}
      <div className='timeline'>

        {/* Priority dropdown.
            Class name includes both a base class ("priority")
            and the current priority value ("High", "Medium", "Low").
            This allows CSS to style each priority differently. */}
        <select 
          className={`priority ${priority}`} 
          value={priority} 
          onChange={handleChange}
        >

          {/* Generate dropdown options dynamically from the options array */}
          {options.map((option)=>{
            return <option key={option} value={option}>{option}</option>
          })}

        </select>
        

        {/* <button className='priority'>{priority}</button> */}
        {/* Deadline label for the task */}
        <div className="deadline">{deadline}</div>

      </div>
    </div>
  );
}

// Export component so it can be used in other files (like App.jsx)
export default TaskCard;