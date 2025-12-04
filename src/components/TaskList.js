function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks available.</p>;
  }
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(index)}
            />
            <strong>{task.name}</strong> - {task.duration} minutes{" "}
            {task.category && ` [${task.category}]`}
            <button onClick={() => onDeleteTask(index)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TaskList;
