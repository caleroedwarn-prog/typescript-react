import { useOutletContext } from "react-router-dom";
import { TaskType } from "../components/Layout";

type ContextType = {
  task: TaskType[];
  setTask: React.Dispatch<React.SetStateAction<TaskType[]>>;

  deletedTask: TaskType[];
  setDeletedTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
};
function Bin() {
  const { task, setTask, deletedTask, setDeletedTask } =
    useOutletContext<ContextType>();

  const restoreTask = (index: number) => {
    if (!deletedTask || index < 0 || index >= deletedTask.length) return;
    const taskToRestore = deletedTask[index];
    setTask((prev) => [...prev, taskToRestore]);
    setDeletedTask((prev) => prev.filter((_, i) => i !== index));
  };
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
        </div>
      ))}
    </>
  );
}
export default Bin;
