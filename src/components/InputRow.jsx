import { useState } from 'react';
import './InputRow.css';

function InputRow({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      onAddTask(taskTitle.trim());
      setTaskTitle('');
    }
  };

  return (
    <form className="input-row" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Enter task title..."
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <button type="submit" className="add-button">
        +
      </button>
    </form>
  );
}

export default InputRow;