import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import WeeklySummary from "./components/WeeklySummary";
import PomodoroTimer from "./components/PomodoroTimer";
import SuggestionBox from "./components/SuggestionBox";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1 className="app-title">Odak Asistanı</h1>
      <p className="app-subtitle">Planla · Odaklan · Gelişimini Gör</p>

      <div className="bento-grid">
        <div className="bento-card pomodoro">
          <PomodoroTimer />
        </div>

        <div className="bento-card tasks">
          <TaskList
            tasks={tasks}
            onToggleComplete={handleToggleComplete}
            onDeleteTask={handleDeleteTask}
          />
        </div>

        <div className="bento-card form">
          <TaskForm onAddTask={handleAddTask} />
        </div>

        <div className="bento-card weekly">
          <WeeklySummary tasks={tasks} />
        </div>

        <div className="bento-card suggestion">
          <SuggestionBox tasks={tasks} />
        </div>
      </div>
    </div>
  );
}
export default App;
