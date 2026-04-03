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
function PreviouseTask(){
    const { previouseTask, setPreviouseTask, setDeletedTask } = useOutletContext<contextType>();

    const completeTask = (index: number) => {
        if(!previouseTask || index < 0 || index >= previouseTask.length) return;

        const taskToComplete = previouseTask[index];
    }
    return(
        <>
        <h2>Previous Tasks</h2>
        </>
    );
}
export default PreviouseTask;