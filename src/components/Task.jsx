import './Task.css';

function Task({ task, onComplete, onDelete }) {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <span className="task-title">{task.title}</span>
      </div>
      <div className="task-buttons">
        <button 
          className={`complete-btn ${task.completed ? 'completed' : ''}`}
          onClick={() => onComplete(task.id)}
          title={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          ✓
        </button>
        <button 
          className="delete-btn"
          onClick={() => onDelete(task.id)}
          title="Delete task"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Task;