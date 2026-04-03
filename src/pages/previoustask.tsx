import { useOutletContext } from "react-router-dom";
import { TaskType } from "../components/Layout";
import Task from "./Task";

type contextType = {
  previouseTask: TaskType[];
  setPreviouseTask: React.Dispatch<React.SetStateAction<TaskType[]>>;

  deletedTask: TaskType[];
  setDeletedTask: React.Dispatch<React.SetStateAction<TaskType[]>>;

  task: TaskType[];
  setTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
};
function PreviouseTask() {
  const { previouseTask, setTask, setDeletedTask } =
    useOutletContext<contextType>();

  const completeTask = (index: number) => {
    setTask((prev) => [...prev, previouseTask[index]]);
    setDeletedTask((prev) => [...prev, previouseTask[index]]);
  };
  return (
    <>
      <h2>Previous Tasks</h2>
      {previouseTask?.length === 0 && <p> No previous tasks</p>}
      {previouseTask?.map((task, index) => (
        <div key={index}>
          <h2>{task.name}</h2>
        </div>
      ))}
    </>
  );
}
export default PreviouseTask;
