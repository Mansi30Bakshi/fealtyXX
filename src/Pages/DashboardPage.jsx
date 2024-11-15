import { useState } from 'react';
import TaskList from '../Components/Dashboard/TaskList';
import TaskForm from '../Components/Dashboard/TaskForm';
import TaskTrendChart from '../Components/Dashboard/TaskTrendChart';
import { tasksData } from '../data/tasksData';
import TimeTracker from '../Components/Dashboard/TimeTracker';
import './Dashboard.css';

export default function DashboardPage() {
  const [tasks, setTasks] = useState(tasksData);
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, timeSpent: 0, createdAt: new Date().toISOString(), updatedAt: new Date() }]);
    alert("Task added successfully!!")
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    alert("Task deleted succesfully !!")
  };

  const updateTask = (updatedTask) => {
    updatedTask.createdAt = new Date().toISOString();
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    alert("Task updated succesfully !!")
  };

  const updateTimeSpent = (taskId, timeSpent) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, timeSpent } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks
    .filter(task => (priorityFilter === 'All' || task.priority === priorityFilter))
    .filter(task => (statusFilter === 'All' || task.status === statusFilter))
    .sort((a, b) => (sortOrder === 'Newest' ? b.createdAt - a.createdAt : a.createdAt - b.createdAt));

  return (
    <>
    <h2>Dashboard</h2>
    <div className="dashboard-container">
      <div className="left-column">
        <div className="task-form">
          <TaskForm onAddTask={addTask} />
        </div>
        
        <div className="filters">
          <label>
            Priority:
            <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <label>
            Status:
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <label>
            Sort By:
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="Newest">Newest</option>
              <option value="Oldest">Oldest</option>
            </select>
          </label>
        </div>

        <div className="task-list">
        <h3>Task List</h3>
          {filteredTasks.map((task) => (
            <TaskList
              key={task.id}
              tasks={[task]}
              onDeleteTask={deleteTask} 
              onUpdateTask={updateTask}
              onUpdateTime={updateTimeSpent}
            />
          ))}
        </div>
      </div>

      <div className="right-column">
        <TaskTrendChart tasks={tasks} />
      </div>
    </div>
    </>
  );
}
