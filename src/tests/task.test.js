const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require("../src/app");

test("Criar tarefa", () => {
  const task = createTask("Estudar", "Engenharia de Software", "Alta");
  expect(task.title).toBe("Estudar");
});

test("Listar tarefas", () => {
  const tasks = getTasks();
  expect(tasks.length).toBeGreaterThan(0);
});

test("Atualizar tarefa", () => {
  const task = updateTask(1, { status: "Done" });
  expect(task.status).toBe("Done");
});
