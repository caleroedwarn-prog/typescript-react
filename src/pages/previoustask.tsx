import { useOutletContext } from "react-router-dom";
import { TaskType } from "../components/Layout";

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
  const cleanPreviouseTask = previouseTask.filter(
    (item) => item !== null && item !== undefined
  );
  return (
    <>
      <h2>Previous Tasks</h2>
      {previouseTask?.length === 0 && <p> No previous tasks</p>}
      {cleanPreviouseTask.map((item, index) => (
        <div key={index} style={{opacity : "0.5"}}>
          <pre>
          <h2>{item.name}
          <p>{item.date} - {item.time}</p>
          </h2>
          </pre>
        </div>
      ))}
    </>
  );
}
export default PreviouseTask;
