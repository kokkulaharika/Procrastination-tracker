import { useState } from "react";
import "./Dailyplan.css";

let DailyPlan = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    if (!task || !deadline) return;

    const newTask = {
      id: Date.now(),
      task,
      deadline,
    };

    setTasks([...tasks, newTask]);
    setTask("");
    setDeadline("");
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  const getTimeLeft = (deadline) => {
    const now = new Date();
    const due = new Date(deadline);

    const diff = due - now;

    if (diff <= 0) return "Deadline passed";

     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `${days} day(s) left`;
};

  return (
    <div className="plan">
      <h2>Daily Plan</h2>
      <h3>Plan your task here</h3>
      <div className="input-box">
        <label>Enter your task: </label>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
         <label>Set deadline: </label>
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <span>
              {t.task} <br/>
               {t.deadline} <br/>
                {getTimeLeft(t.deadline)}
             </span>
            <button onClick={() => handleDelete(t.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default DailyPlan;