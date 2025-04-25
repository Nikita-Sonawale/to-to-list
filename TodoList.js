import React, { useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    
    
   <Grid 
  container 
  spacing={2} 
  style={{ 
    padding: '2rem', 
    backgroundColor: '#f0f0f0', 
    borderRadius: '8px', 
    width: '90%', // Adjust width for responsiveness
    maxWidth: '400px', // Limit the maximum width
    margin: 'auto' 
  }}
>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
    <input
      type="text"
      placeholder="Add a new task..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      style={{
        flex: '1', // Allow the input to grow and shrink
        padding: '0.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
        minWidth: '150px', // Minimum width for smaller screens
      }}
    />
    <button
      onClick={addTask}
      style={{
        backgroundColor: 'green',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        borderRadius: '4px',
        flexShrink: '0', // Prevent the button from shrinking
      }}
    >
      Add
    </button>
  </div>

  <ul style={{ listStyle: 'none', padding: 0, margin: 0, width: '100%' }}>
    {tasks.map((task, index) => (
      <li
        key={index}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          textDecoration: task.completed ? 'line-through' : 'none',
          marginTop: '1rem',
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '4px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(index)}
            style={{ marginRight: '0.5rem' }}
          />
          <span>{task.text}</span>
        </div>
        <IconButton
          onClick={() => removeTask(index)}
          style={{ marginLeft: '2rem' }}
        >
          <DeleteIcon />
        </IconButton>
      </li>
    ))}
  </ul>
</Grid>

  );
}

export default TodoList;
