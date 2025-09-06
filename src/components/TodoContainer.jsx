import { useState } from 'react';
import './TodoContainer.css';
import InputRow from './InputRow';
import TaskGroup from './TaskGroup';

function TodoContainer() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskTitle) => {
    setTasks([...tasks, taskTitle]);
  };

  return (
    <div className="app-container">
      <div className="app-container todo-main">
        <h1 className="app-container todo-main title">Kodigo's To-Do</h1>
        <InputRow onAddTask={handleAddTask} />
        <TaskGroup tasks={tasks} />
      </div>
    </div>
  );
}

export default TodoContainer;