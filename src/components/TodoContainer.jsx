import { useState } from 'react';
import './TodoContainer.css';
import InputRow from './InputRow';
import TaskGroup from './TaskGroup';

function TodoContainer() {
  const [tasks, setTasks] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleAddTask = (taskTitle) => {
    const newTask = {
      id: nextId,
      title: taskTitle,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
  };

  const handleCompleteTask = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="app-container">
      <div className="app-container todo-main">
        <h1 className="app-container todo-main title">Kodigo's To-Do</h1>
        <InputRow onAddTask={handleAddTask} />
        <TaskGroup 
          tasks={tasks}
          onCompleteTask={handleCompleteTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}

export default TodoContainer;