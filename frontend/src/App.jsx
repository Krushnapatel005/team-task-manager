import React, { useEffect, useState } from "react";

const initialTasks = [
  { id: 1, title: "Set up the project repository", owner: "Krushna", status: "Done" },
  { id: 2, title: "Create the React frontend", owner: "Jinesh", status: "In Progress" },
  { id: 3, title: "Plan the PostgreSQL database", owner: "Krushna", status: "To Do" }
];

const STATUS_OPTIONS = ["To Do", "In Progress", "Done"];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");
  const [status, setStatus] = useState(STATUS_OPTIONS[0]);
  const [backendUp, setBackendUp] = useState(null);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/health");
        if (!res.ok) throw new Error("bad status");
        const data = await res.json();
        setBackendUp(Boolean(data && data.status !== "down"));
      } catch (e) {
        setBackendUp(false);
      }
    };

    checkHealth();
    const id = setInterval(checkHealth, 5000);
    return () => clearInterval(id);
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (!title.trim() || !owner.trim()) return;
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      owner: owner.trim(),
      status
    };
    setTasks((t) => [newTask, ...t]);
    setTitle("");
    setOwner("");
    setStatus(STATUS_OPTIONS[0]);
  };

  const updateStatus = (id, newStatus) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t)));
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Stage 0 demo</p>
        <h1>Team Task Manager</h1>
        <p className="intro">A small starting point for learning full-stack teamwork with GitHub.</p>
      </section>

      <section className="card top-row">
        <div className="card-heading">
          <h2>Dashboard</h2>
          <div className="backend-status">
            <span className={`health ${backendUp === true ? "ok" : backendUp === false ? "bad" : "unknown"}`}>
              {backendUp === null ? "Checking..." : backendUp ? "Connected" : "Disconnected"}
            </span>
          </div>
        </div>
        <div className="card-body">
          <form className="task-form" onSubmit={addTask} aria-label="Add new task">
            <div className="form-row">
              <label>
                Title
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
              </label>
              <label>
                Assignee
                <input value={owner} onChange={(e) => setOwner(e.target.value)} placeholder="Person's name" />
              </label>
              <label>
                Status
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
              <div className="form-actions">
                <button type="submit" className="primary">Add Task</button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="card" aria-labelledby="tasks-heading">
        <div className="card-heading">
          <h2 id="tasks-heading">Tasks</h2>
          <span>{tasks.length} tasks</span>
        </div>
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id} className="task">
              <div className="task-main">
                <div>
                  <h3>{task.title}</h3>
                  <p>Assigned to {task.owner}</p>
                </div>
              </div>
              <div className="task-actions">
                <select value={task.status} onChange={(e) => updateStatus(task.id, e.target.value)} aria-label={`Change status for ${task.title}`}>
                  {STATUS_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <button className="danger" onClick={() => deleteTask(task.id)} aria-label={`Delete ${task.title}`}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <p className="note">Backend health: <strong>{backendUp === null ? "Checking..." : backendUp ? "Connected" : "Disconnected"}</strong></p>
    </main>
  );
}

export default App;
