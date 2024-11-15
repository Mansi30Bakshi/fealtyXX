import React, { useState, useEffect } from 'react';

export default function TaskForm({ onAddTask, onSave, task, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('To Do');
  const [assignee, setAssignee] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setPriority(task.priority);
      setStatus(task.status);
      setAssignee(task.assignee);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      priority,
      status,
      assignee,
      updatedAt: new Date(),
      id: task ? task.id : Date.now(),
    };

    if (task) {
      onSave(newTask);
    } else {
      onAddTask(newTask);
    }

    setTitle('');
    setDescription('');
    setPriority('Medium');
    setStatus('To Do');
    setAssignee('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{task ? 'Edit Task' : 'Create Task'}</h3>
      <div className="end">
      <label>
        The Title:
        
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        </label>
    

     

      <label>
       <div className='prior'>Priority:</div> 
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </label>

      <label>
      <div className='prior'>  Status:</div>
        <select value={status} onChange={(e) => setStatus(e.target.value)} required>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </label>

      <label>
        Assignee:
        <input
          type="text"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
      </label>
      </div>
      <label >

      <div className='prior'> Description:</div>
        <textarea className='desc'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      
      <button type="submit">{task ? 'Save Changes' : 'Add Task'}</button>
      {task && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}
