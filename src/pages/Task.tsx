import { useState } from "react";
import TaskForm from "./form";
import "../static/tasks.css";

type TaskType = {
    name: string
    date: string
    time: string
    priority: string
  }
function Tasks(){
    const[task, setTask] = useState<TaskType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const[deleteTasks, setDeleteTask] = useState<TaskType[]>([]);
    const addTask = (newTask: TaskType) => {
        setTask(prev => [...prev, newTask]);
        setIsModalOpen(false);
    }
    const deleteTask = (index: number) => {
        const taskToDelete = task[index]

        setTask(prev => prev.filter((_, i) => i !== index))

        setDeleteTask(prev => [...prev, taskToDelete])
    }

    return(
        <div className={`task-page ${isModalOpen ? "blurred" : ""}`}>
        <h2> Tasks </h2>
        <button type="button" className="add-task-btn" onClick={() => setIsModalOpen(true)}> + </button>

        {/* modal */}
        {isModalOpen && (
            <div className="modal-overlay" onClick={() => setIsModalOpen(true)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button 
                    type="button" 
                    title="Close" 
                    className="Modal-close" 
                    onClick={() => setIsModalOpen(false)}>
                        &times;</button>
                    <TaskForm addTask={addTask} />
                </div>
            </div>
        )}
        <div className="task-list">
            {task.map((task, index) => (
                <div key={index} className="task-list">
                    <h3>{task.name}</h3>
                    <p>{task.date} - {task.time}</p>
                    <p>Priority : {task.priority}</p>
                </div>
            ))}

        </div>
        </div>
    );
}
export default Tasks;