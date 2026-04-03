import { useOutletContext } from "react-router-dom";
import { TaskType } from "../components/Layout";

type ContextType = {
  task: TaskType[];
  setTask: React.Dispatch<React.SetStateAction<TaskType[]>>;

  deletedTask: TaskType[];
  setDeletedTask: React.Dispatch<React.SetStateAction<TaskType[]>>;

  previouseTask: TaskType[];
  setPreviouseTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
};
function Bin() {
  const { setTask, deletedTask, setDeletedTask, setPreviouseTask } =
    useOutletContext<ContextType>();

  const restoreTask = (index: number) => {
    if (!deletedTask || index < 0 || index >= deletedTask.length) return;

    const taskToRestore = deletedTask[index];

    setDeletedTask((prev) => prev.filter((_, i) => i !== index));

    setTask((prev) => [...prev, taskToRestore]);
  
  };

  const parmenentDeleteTask = (index: number) => {
    if(!deletedTask || index < 0 || index >= deletedTask.length)
      return;

    const  taskToParmenentDelete = deletedTask[index];

    setDeletedTask((prev) => prev.filter((_, i) => i !== index));

    setPreviouseTask((prev) => [...prev, taskToParmenentDelete]);
  }
  return (
    <>
      <h2> Bin Page</h2>

      {(deletedTask?.length ?? 0) === 0 && <p> No deleted tasks</p>}

      {deletedTask?.map((task, index) => (
        <div key={index}>
          <h3> {task.name} </h3>
          <button type="button" onClick={() => restoreTask(index)}>
            Restore
          </button>
          <button type="button" onClick={() => parmenentDeleteTask(index)}>
            Permanently Delete
          </button>
        </div>
      ))}
    </>
  );
}
export default Bin;
