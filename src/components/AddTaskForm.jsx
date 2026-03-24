import './AddTaskForm.css';

import { useState } from "react";
function AddTaskForm({addTask}) {

  const options = ['High', 'Medium', 'Low'];


  const [priority, setPriority] = useState(options[0]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  
  const handleChange = (e) => {
    setPriority(e.target.value);
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  }


  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const handleChangeDeadline = (e) => {
    setDeadline(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const newTask = {
    title,
    description,
    priority,
    deadline
    }

    addTask(newTask);

    setTitle('');
    setDescription('');
    setPriority(options[0]);
    setDeadline('');
  }
  return (
    <>
      <div className='button-form'>


        <div className='add-task-form'>
          <form onSubmit={handleSubmit}>
            <div className='form'>

              <div className='form-elements'>
                <label>Title: </label>
                <input type='text' onChange={handleChangeTitle} value={title}></input>
              </div>
              <div className='form-elements'>
                <label>Description: </label>
                <input type='text' onChange={handleChangeDescription} value={description}></input>
              </div>
              <div className='form-elements'>
                <label>Priority: </label>
                <div className='select'>

                  <select onChange={handleChange} value={priority} className={`priority ${priority}`}>
                    {options.map((option) => {
                      return <option key={option} value={option}>{option}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className='form-elements'>
                <label>Deadline: </label>
                <input type='datetime-local' value={deadline} onChange={handleChangeDeadline}></input>
              </div>

            </div>


        <div className='submit'>
          <button type='submit'>Submit</button>
        </div>
          </form>
        </div>
      </div>
    </>

  );
}

export default AddTaskForm;