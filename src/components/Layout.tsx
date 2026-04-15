import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Hambourger from "./Hambourger";
import { useState, useEffect } from "react";
import "../static/layer.css";

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

  const [themeColor, setThemeColor] = useState(() => {
    return localStorage.getItem("themeColor") || "#4CAF50";
  });

  const [darkMode, setDarkMode] = useState(() =>{
    return localStorage.getItem("darkMode") === "true"
  })

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    localStorage.setItem("deletedTask", JSON.stringify(deletedTask));
  }, [deletedTask]);

  useEffect(() => {
    localStorage.setItem("previouseTask", JSON.stringify(previouseTask));
  });

  useEffect(() => {
    localStorage.setItem("themeColor", themeColor);
  }, [themeColor]);

  useEffect(() =>{
    localStorage.setItem("darkMode", String(darkMode))
  }, [darkMode])

  return (
    <>
      <Navbar themeColor={themeColor} />
      <div className="menulist">
        <Hambourger />
      </div>
      <main className="main-layout">
        <Outlet
          context={{
            task,
            setTask,
            deletedTask,
            themeColor,
            darkMode,
            setDarkMode,
            setThemeColor,
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
