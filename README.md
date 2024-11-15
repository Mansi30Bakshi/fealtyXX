# Task Management Application

This is a task management application built with React. The app allows users to create, edit, delete, and manage tasks. Each task has details such as title, description, priority, status, assignee, and time spent. It also includes a timer functionality to track time spent on each task. Additionally, it features a task trend chart that visualizes the number of tasks created per day.

## Features

- **Create Tasks**: Add tasks with details such as title, description, priority, status, and assignee.
- **Edit Tasks**: Edit existing tasks with updated information.
- **Delete Tasks**: Remove tasks from the list.
- **Time Tracker**: Track time spent on tasks with a start, stop, and reset timer.
- **Task Trend Chart**: Visualize the number of tasks created per day with a line chart.
- **Task Filtering**: Filter tasks based on status and priority.

## Components

### 1. `TaskList`
The `TaskList` component is responsible for displaying a list of tasks. It handles editing and deleting tasks, and it renders the `TaskForm` for editing or creating new tasks.

- **Props**:
  - `tasks`: Array of task objects.
  - `onDeleteTask`: Function to delete a task.
  - `onUpdateTask`: Function to update a task.
  - `onUpdateTime`: Function to update the time spent on a task.

### 2. `TaskForm`
The `TaskForm` component is used for creating and editing tasks. It includes fields for the task's title, description, priority, status, and assignee. When editing an existing task, it populates the form with the task's current details.

- **Props**:
  - `onAddTask`: Function to add a new task.
  - `onSave`: Function to save the edited task.
  - `task`: Task object (only used when editing).
  - `onCancel`: Function to cancel editing.

### 3. `TaskItem`
The `TaskItem` component displays a single task's details and includes buttons to delete the task and start/stop the timer.

- **Props**:
  - `task`: Task object containing details about the task.
  - `onDelete`: Function to delete the task.
  - `onUpdate`: Function to update the task.

### 4. `TimeTracker`
The `TimeTracker` component allows users to track the time spent on each task with a start, stop, and reset button.

- **Props**:
  - `task`: Task object containing the task's details.
  - `onUpdateTime`: Function to update the time spent on the task.

### 5. `TaskTrendChart`
The `TaskTrendChart` component visualizes the number of tasks created per day using a line chart. It uses the `react-chartjs-2` library with `chart.js` to generate the chart.

- **Props**:
  - `tasks`: Array of task objects containing the `createdAt` field.

- **How it works**: 
  - The component processes the `tasks` prop to count the number of tasks created on each day.
  - It then updates the chart data to display a line chart showing the task count per day.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mansi30Bakshi/fealtyXX.git
   ```

2. Install dependencies:

   ```bash
   cd fealtyXX
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

   The app should now be running at [http://localhost:5173](http://localhost:5173).

## Login Credentials

To log in, use the following credentials:

- **Username**: `testuser`
- **Password**: `testpass`

## Usage

- **Create a task**: Click the "Create Task" button and fill out the task details. Then click "Add Task".
- **Edit a task**: Click the "Edit" button on a task to update its details and save changes.
- **Delete a task**: Click the "Delete" button to remove the task from the list.
- **Time tracking**: Use the "Start Timer" button to begin tracking time, "Stop Timer" to stop, and "Reset Timer" to reset the time.
- **View Task Trend**: The task trend chart will automatically update to show the number of tasks created per day.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Chart.js**: A JavaScript library for creating charts.
- **react-chartjs-2**: A React wrapper for Chart.js to integrate charts in React applications.
- **CSS**: For styling the application.
- **JavaScript (ES6)**: For logic and functionality.



