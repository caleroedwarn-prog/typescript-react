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
  previouseTask: TaskType[];
  setPreviouseTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
};

function Tasks() {
  const { task, setTask, setDeletedTask, setPreviouseTask } =
    useOutletContext<ContextType>();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addTask = (newTask: TaskType) => {
    setTask((prev) => [...prev, newTask]);
    setIsModalOpen(false);
    alert("Task added successfully");
    console.log(newTask);
  };

  const deleteTask = (index: number) => {
    if (!task || index < 0 || index >= task.length) return;

    const taskToDelete = task[index]; // stores the task to be deleted before removing it from the task list

    setTask((prev) => prev.filter((_, i) => i !== index)); // remove the task from the task list

    setDeletedTask((prev) => [...prev, taskToDelete]); // add the deleted task to the deletedTask list for potential restoration later
  };

  const completedTask = (index: number) => {
    if (!task || index < 0 || index >= task.length) return;

    const taskToComplete = task[index]; // stores the task to be completed befor removing it from the task list

    setTask((prev) => prev.filter((_, i) => i !== index)); // remove the task from the task list

    setPreviouseTask((prev) => [...prev, taskToComplete]); // add the completed task to the previouseTask list
  };

  const cleanTask = task.filter((item) => item !== null && item !== undefined);

  return (
    <div className={`task-page ${isModalOpen ? "blurred" : ""}`}>
      <h2> Tasks </h2>
      <button
        type="button"
        className="add-task-btn"
        onClick={() => setIsModalOpen(true)}
      >
        +
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
        {cleanTask.map((item, index) => (
          <div key={index} className="task-item">
            <h3>{item.name}</h3>
            <p>
              {item.date} - {item.time}
            </p>
            <p>Priority : {item.priority}</p>
            <div className="task-buttons">
              <button type="button" id="delete" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button type="button" onClick={() => completedTask(index)}>
                Completed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Tasks;
