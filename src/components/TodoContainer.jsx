import { useState, useEffect } from 'react';
import './TodoContainer.css';
import InputRow from './InputRow';
import TaskGroup from './TaskGroup';
import { taskService } from '../services/taskService';

function TodoContainer() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = taskService.subscribeToTasks((updatedTasks) => {
      setTasks(updatedTasks);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleAddTask = async (taskTitle) => {
    try {
      await taskService.addTask(taskTitle);
    } catch (error) {
      console.error('Failed to add task:', error);
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      const task = tasks.find(t => t.id === taskId);
      await taskService.updateTask(taskId, { completed: !task.completed });
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await taskService.deleteTask(taskId);
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  if (loading) {
    return (
      <div className="app-container">
        <div className="app-container todo-main">
          <h1 className="app-container todo-main title">Kodigo's To-Do</h1>
          <div className="loading">Loading tasks...</div>
        </div>
      </div>
    );
  }

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