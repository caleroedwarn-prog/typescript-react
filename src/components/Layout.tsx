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

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);
  return (
    <>
      <Navbar />
      <Hambourger />
      <main>
        <Outlet context={{ task, setTask }} />
      </main>
    </>
  );
}
export default Layout;
