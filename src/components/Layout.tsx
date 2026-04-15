import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hambourger from "./Hambourger";
import { useState, useEffect } from "react";


export type TaskType = {
  name: string;
  date: string;
  time: string;
  priority: string;
};
function Layout() {
  const [task, setTask] = useState<TaskType[]>(() => {
    const saved = localStorage.getItem("task");
    return saved ? JSON.parse(saved) : [];
  });

  const [deletedTask, setDeletedTask] = useState<TaskType[]>(() => {
    const saved = localStorage.getItem("deletedTask");
    return saved ? JSON.parse(saved) : [];
  });

  const [previouseTask, setPreviouseTask] = useState<TaskType[]>(() => {
    const saved = localStorage.getItem("previouseTask");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    localStorage.setItem("deletedTask", JSON.stringify(deletedTask));
  }, [deletedTask]);

  useEffect(() => {
    localStorage.setItem("previouseTask", JSON.stringify(previouseTask));
  });

  return (
    <>
      <Navbar />
      <div className="menulist">
        <Hambourger />
      </div>
      <main>
        <Outlet
          context={{
            task,
            setTask,
            deletedTask,
            setDeletedTask,
            previouseTask,
            setPreviouseTask,
          }}
        />
      </main>
    </>
  );
}
export default Layout;
