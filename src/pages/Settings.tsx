import { useOutletContext } from "react-router-dom";
import { TaskType } from "../components/Layout";

interface ContextType {
  task: TaskType[];
  setTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
  deletedTask: TaskType[];
  themeColor: string;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
  setDeletedTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
  previouseTask: TaskType[];
  setPreviouseTask: React.Dispatch<React.SetStateAction<TaskType[]>>;
}

function Settings(){
    const { themeColor, setThemeColor } = useOutletContext<ContextType>();
    return (
      <>
        <h2> Settings page</h2>
        <div
          style={{
            position: "relative",
            top: "100px",
            textAlign: "center",
          }}
        >
          <label htmlFor="color">Choose theme color: </label>
          <input
            title="color"
            type="color"
            value={themeColor}
            onChange={(e) => setThemeColor(e.target.value)}
          />
        </div>
      </>
    );
}
export default Settings; 