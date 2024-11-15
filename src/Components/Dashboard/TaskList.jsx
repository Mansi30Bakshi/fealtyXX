import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TimeTracker from './TimeTracker';

export default function TaskList({ tasks, onDeleteTask, onUpdateTask, onUpdateTime }) {
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const handleSaveEdit = (updatedTask) => {
    onUpdateTask(updatedTask);
    setEditingTask(null);
  };

  return (
    <div>
      {editingTask ? (
        <TaskForm
          task={editingTask}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-item">
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <p>Status: {task.status}</p>
            <p>Assignee: {task.assignee}</p>
            <p>
              Created At:{task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'No Date Available'}
            </p>
            <TimeTracker task={task} onUpdateTime={onUpdateTime} />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <button onClick={() => handleEdit(task)}
            style={{
              padding: '4px 3px', 
              backgroundColor: '#4CAF50', 
              color: 'white', 
              fontSize:'20px',
              border: 'none', 
              borderRadius: '10px', 
              cursor: 'pointer'
            }}>Edit</button>
            <button 
            onClick={() => onDeleteTask(task.id)} 
  style={{
    padding: '4px 3px', 
    backgroundColor: '#f44336', 
    color: 'white', 
    border: 'none', 
    fontSize:'20px',
    borderRadius: '10px', 
    cursor: 'pointer'
  }}
>
  Delete
</button>
          </div>
          </div>
        ))
      )}
    </div>
  );
}
