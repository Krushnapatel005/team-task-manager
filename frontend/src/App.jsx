const starterTasks = [
  { title: "Set up the project repository", owner: "Krushna", status: "Done" },
  { title: "Create the React frontend", owner: "Jinesh", status: "In progress" },
  { title: "Plan the PostgreSQL database", owner: "Krushna", status: "Next stage" }
];

function App() {
  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">Stage 0 demo</p>
        <h1>Team Task Manager</h1>
        <p className="intro">
          A small starting point for learning full-stack teamwork with GitHub.
        </p>
      </section>

      <section className="card" aria-labelledby="tasks-heading">
        <div className="card-heading">
          <h2 id="tasks-heading">Starter tasks</h2>
          <span>3 tasks</span>
        </div>
        <ul className="task-list">
          {starterTasks.map((task) => (
            <li key={task.title} className="task">
              <div>
                <h3>{task.title}</h3>
                <p>Assigned to {task.owner}</p>
              </div>
              <span className="status">{task.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <p className="note">
        The backend health endpoint is available at <code>/api/health</code> on port 5000.
      </p>
    </main>
  );
}

export default App;
