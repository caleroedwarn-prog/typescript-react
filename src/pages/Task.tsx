import { useState } from "react";
import TaskForm from "./form";
import "../static/tasks.css";

function Tasks(){
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                    <TaskForm />
                </div>
            </div>
        )}
        <div className="task-list">
            <ul>
                <li></li>
            </ul>

        </div>
        </div>
    );
}
export default Tasks;