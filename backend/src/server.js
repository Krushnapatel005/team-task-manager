import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_request, response) => {
  response.json({ message: "Team Task Manager API is running." });
});

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", message: "Backend is healthy." });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
