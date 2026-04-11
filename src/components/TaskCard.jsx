// Import component-specific styles
import './TaskCard.css';

// Import React hook for managing state inside the component
import { useState } from 'react';

// TaskCard component represents a single task in the UI
function TaskCard({ title, description, priorityPassed, deadline, deleteTask, completed, toggleCompleted, isEditing, editTask }) {

  // Available priority options for the dropdown
  const options = ['High', 'Medium', 'Low'];

  console.log(priorityPassed);

  // React state to track the currently selected priority
  // Default value is the first option ("High")
  const [priority, setPriority] = useState(priorityPassed);

  const [open, setOpen] = useState(false);

  const [editTitle, setEditTitle] = useState(title);

  const [editDescription, setEditDescription] = useState(description);

  const [editDeadline, setEditDeadline] = useState(deadline);

  // Event handler that runs whenever the dropdown selection changes
  // Updates the priority state with the selected value
  const handleChange = (e) => {
    setPriority(e.target.value);
  };


  if (isEditing) {
    return (
      <div className="task-card">

        <input type='checkbox' checked={completed} onChange={toggleCompleted}></input>
        {/* Task title */}
        <input type='text' className={completed ? "task-title completed" : "task-title"} value={editTitle} onChange={(e) => { setEditTitle(e.target.value) }} />

        {/* Short description of the task */}
        <input type='text' className={completed ? "task-description completed" : "task-description"} value={editDescription} onChange={(e) => { setEditDescription(e.target.value) }} />

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
            {options.map((option) => {
              return <option key={option} value={option}>{option}</option>
            })}

          </select>


          {/* <button className='priority'>{priority}</button> */}
          {/* Deadline label for the task */}
          <input type='datetime-local' className="deadline" value={editDeadline} onChange={(e) => { setEditDeadline(e.target.value) }} />

          <button className='delete' onClick={deleteTask}>Delete</button>

          <button
            className='edit'
            onClick={() => {
              if (isEditing) {
                // Save edits
                editTask({
                  title: editTitle,
                  description: editDescription,
                  deadline: editDeadline,
                  priority: priority
                });
              } else {
                // Just toggle edit mode
                editTask({});
              }
            }}
          >
            {isEditing ? "Done" : "Edit"}
          </button>

        </div>
      </div>
    );
  }
  return (


    // Main container for the task card
    <div className="task-card">

      <input type='checkbox' checked={completed} onChange={toggleCompleted}></input>
      {/* Task title */}
      <h2 className={completed ? "task-title completed" : "task-title"}>{title}</h2>

      {/* Short description of the task */}
      <div className={completed ? "task-description completed" : "task-description"}>{description}</div>

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
          {options.map((option) => {
            return <option key={option} value={option}>{option}</option>
          })}

        </select>


        {/* <button className='priority'>{priority}</button> */}
        {/* Deadline label for the task */}
        <div className="deadline">{deadline}</div>

        <button className='delete' onClick={deleteTask}>Delete</button>

        <button
          className='edit'
          onClick={() => {
            if (isEditing) {
              // Save edits
              editTask({
                title: editTitle,
                description: editDescription,
                deadline: editDeadline,
                priority: priority
              });
            } else {
              // Just toggle edit mode
              editTask({});
            }
          }}
        >
          {isEditing ? "Done" : "Edit"}
        </button>

      </div>
    </div>
  );
}

// Export component so it can be used in other files (like App.jsx)
export default TaskCard;