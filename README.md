# Team Task Manager

A small full-stack project for practicing Git, GitHub, team collaboration, PostgreSQL, backend APIs, and frontend development.

## Team

- Krushna — Backend & Database
- Jinesh — Frontend

## Tech Stack

- React + Vite
- Node.js + Express
- PostgreSQL (planned for Stage 1)
- Prisma (planned for Stage 1)
- Git + GitHub

## Current Stage

**Stage 0 — Basic Project Setup**

This stage includes a basic React frontend, an Express backend, a health-check API, and the initial project structure. PostgreSQL integration will be added in Stage 1.

## Project Structure

```text
team-task-manager/
├── backend/
│   ├── src/server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
├── .gitignore
├── package.json
└── README.md
```

## Run the Project

Use two terminals.

### Backend

```bash
cd backend
npm install
npm run dev
```

The API starts at [http://localhost:5000](http://localhost:5000). Check [http://localhost:5000/api/health](http://localhost:5000/api/health) to confirm it works.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the local address printed by Vite (normally [http://localhost:5173](http://localhost:5173)).

## Git Workflow

Create a feature branch for each change and open a pull request before merging into `main`.

```text
main
├── feature/backend
└── feature/frontend
```
# team-task-manager
