import './TaskGroup.css';

function TaskGroup({ tasks }) {
  return (
    <div className="task-group">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet. Add one above!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskGroup;