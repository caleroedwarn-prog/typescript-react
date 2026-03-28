import { useState } from "react";
import "../static/forms.css";
import { useActionData } from "react-router-dom";

type TaskType = {
  name: string
  date: string
  time: string
  priority: string
}

type Props = {
  addTask: (task: TaskType) => void
}
function TaskForm({addTask}: Props){
  const [tasks, setTask] = useState([]);

  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    priority: "",
  });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!form.name.trim) {
        alert("Task name is neccesary");
        return;
      }
      if (!form.time || !form.time) {
        alert("Date and Time is Necessary");
        return;
      }
      console.log(form);
      addTask(form);
      setForm({
        name: "",
        date: "",
        time: "",
        priority: ""
      })
    };

    return (
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Task Name / Label"
          value={form.name}
          onChange={handleChange}
        />

        <label>
          {" "}
          Input Time
          <input type="time"
           name="time" 
           id="time"
           value={form.time} 
           onChange={handleChange}
           />
        </label>
        <label>
            Input Date
            <input
            type="date"
            name="date"
            id="date"
            value={form.date}
            onChange={handleChange}
            />
        </label>
        <select
        title="Priority"
        name="priority"
        value={form.priority}
        onChange={handleChange}
        className={`priority-${form.priority.toLowerCase}`}
        >
            <option className="priority">Low</option>
            <option className="priority">Medium</option>
            <option className="priority">High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    );
}
export default TaskForm;