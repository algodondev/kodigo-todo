import './TaskGroup.css';
import Task from './Task';

function TaskGroup({ tasks, onCompleteTask, onDeleteTask }) {
  return (
    <div className="task-group">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks yet. Add one above!</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onComplete={onCompleteTask}
              onDelete={onDeleteTask}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskGroup;