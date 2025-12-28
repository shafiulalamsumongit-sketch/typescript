import { Request, Response } from "express";
import { db } from "../db";


export const getTodos = async (_: Request, res: Response) => {
  const [rows] = await db.query("SELECT * FROM todos ORDER BY id DESC");
  res.json(rows);
};

export const createTodo = async (req: Request, res: Response) => {
  const { title } = req.body;
  await db.query("INSERT INTO todos (title) VALUES (?)", [title]);
  res.json({ message: "Todo added" });
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  await db.query("UPDATE todos SET completed=? WHERE id=?", [completed, id]);
  res.json({ message: "Todo updated" });
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.query("DELETE FROM todos WHERE id=?", [id]);
  res.json({ message: "Todo deleted" });
};
