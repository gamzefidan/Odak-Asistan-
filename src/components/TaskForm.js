import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDuration, setTaskDuration] = useState("");
  const [taskCategory, setTaskCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      duration: (taskDuration, 10),
      category: taskCategory,
    };
    onAddTask(newTask);
    setTaskName("");
    setTaskDuration("");
    setTaskCategory("Work");
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <input
          type="number"
          value={taskDuration}
          onChange={(e) => setTaskDuration(e.target.value)}
          placeholder="Duration (minutes)"
        />
        <select
          value={taskCategory}
          onChange={(e) => setTaskCategory(e.target.value)}
        >
          <option value="">Seçiniz</option>
          <option value="Work">Work</option>
          <option value="Study">Study</option>
          <option value="Exercise">Exercise</option>
          <option value="Free">Free</option>
        </select>
        <button type="submit">Add Task</button>
      </div>
    </form>
  );
}

export default TaskForm;
