import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/todos", todoRoutes);

app.listen(3001, () => {
  console.log("Server running  ffffffffffff on http://localhost:3001");
});
