// Import component-specific styles
import './TaskCard.css';

// Import React hook for managing state inside the component
import { useState } from 'react';

// TaskCard component represents a single task in the UI
function TaskCard({ }) {

  // Available priority options for the dropdown
  const options = ['High', 'Medium', 'Low'];

  // React state to track the currently selected priority
  // Default value is the first option ("High")
  const [priority, setPriority] = useState(options[0]);

  // Event handler that runs whenever the dropdown selection changes
  // Updates the priority state with the selected value
  const handleChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    
    // Main container for the task card
    <div className="task-card">

      {/* Task title */}
      <h2 className="task-title">Task Title</h2>

      {/* Short description of the task */}
      <div className="task-description">Task Description</div> 

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
            return <option key={option}>{option}</option>
          })}

        </select>

        {/* Deadline label for the task */}
        <div className="deadline">Deadline: Date</div>

      </div>
    </div>
  );
}

// Export component so it can be used in other files (like App.jsx)
export default TaskCard;