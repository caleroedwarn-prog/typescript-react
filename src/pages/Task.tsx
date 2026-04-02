import { useState } from "react";
import TaskForm from "./form";
import { useOutletContext } from "react-router-dom";
import "../static/tasks.css";
import { TaskType } from "../components/Layout";

type ContextType = {
  task: TaskType[];
  setTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
  deletedTask: TaskType[];
  setDeletedTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

function Tasks() {
  const { task, setTask, deletedTask, setDeletedTask } =
    useOutletContext<ContextType>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (newTask: TaskType) => {
    setTask((prev) => [...prev, newTask]);
    setIsModalOpen(false);
  };

  const deleteTask = (index: number) => {
    if (!task || index < 0 || index >= task.length) return;

    const taskToDelete = task[index];

    setTask((prev) => prev.filter((_, i) => i !== index));

    setDeletedTask((prev) => [...prev, taskToDelete]);
  };

  return (
    <div className={`task-page ${isModalOpen ? "blurred" : ""}`}>
      <h2> Tasks </h2>
      <button
        type="button"
        className="add-task-btn"
        onClick={() => setIsModalOpen(true)}
      >
        {" "}
        +{" "}
      </button>

      {/* modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(true)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              title="Close"
              className="Modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <TaskForm addTask={addTask} />
          </div>
        </div>
      )}
      <div className="task-list">
        {task.map((task, index) => (
          <div key={index} className="task-list">
            <h3>{task.name}</h3>
            <p>
              {task.date} - {task.time}
            </p>
            <p>Priority : {task.priority}</p>
            <button type="button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Tasks;
