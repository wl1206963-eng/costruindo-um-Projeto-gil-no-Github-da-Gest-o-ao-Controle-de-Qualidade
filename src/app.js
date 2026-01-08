let tasks = [];
let id = 1;

function createTask(title, description, priority = "Média") {
  const task = {
    id: id++,
    title,
    description,
    priority,
    status: "To Do"
  };
  tasks.push(task);
  return task;
}

function getTasks() {
  return tasks;
}

function updateTask(taskId, data) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return null;
  Object.assign(task, data);
  return task;
}

function deleteTask(taskId) {
  tasks = tasks.filter(t => t.id !== taskId);
}

module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask
};
