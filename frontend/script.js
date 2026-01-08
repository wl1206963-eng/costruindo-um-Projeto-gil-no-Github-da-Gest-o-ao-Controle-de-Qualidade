const API = "http://localhost:3000/api/tasks";

function loadTasks() {
  fetch(API)
    .then(res => res.json())
    .then(tasks => {
      const list = document.getElementById("taskList");
      list.innerHTML = "";
      tasks.forEach(task => {
        list.innerHTML += `
          <li>
            ${task.title} - ${task.priority} - ${task.status}
            <button onclick="finishTask(${task.id})">Concluir</button>
            <button onclick="deleteTask(${task.id})">Excluir</button>
          </li>
        `;
      });
    });
}

function addTask() {
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;

  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, priority })
  }).then(loadTasks);
}

function finishTask(id) {
  fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "Done" })
  }).then(loadTasks);
}

function deleteTask(id) {
  fetch(`${API}/${id}`, { method: "DELETE" })
    .then(loadTasks);
}

loadTasks();
