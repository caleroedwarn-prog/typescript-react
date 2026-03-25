import { useState } from "react";
import TaskForm from "./form";

function Tasks(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <div className={`task-page ${isModalOpen ? "blurred" : ""}`}>
        <h2> Tasks </h2>
        <button type="button" className="add-task-btn" onClick={() => setIsModalOpen(true)}> + </button>

        {/* modal */}
        {isModalOpen && (
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <button type="button" title="Close" className="Modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
                    <TaskForm />
                </div>
            </div>
        )}
        <div className="task-list">

        </div>
        </div>
    );
}
export default Tasks;