const express = require("express");
const router = express.Router();

let tasks = [];
let id = 1;

// Criar tarefa
router.post("/tasks", (req, res) => {
  const { title, priority } = req.body;
  const task = {
    id: id++,
    title,
    priority,
    status: "To Do"
  };
  tasks.push(task);
  res.json(task);
});

// Listar tarefas
router.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Atualizar status
router.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).end();
  task.status = req.body.status;
  res.json(task);
});

// Deletar tarefa
router.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.status(204).end();
});

module.exports = router;
