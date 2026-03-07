import { User } from "./modules/user.js";
import { Storage } from "./modules/storage.js";
import { TaskManager } from "./modules/tasks.js";
import { LearningTracker } from "./modules/tracker.js";
import { fetchQuote } from "./modules/api.js";



const title = document.getElementById("title");
const form = document.getElementById("user-form");
const input = document.getElementById("name");
const output = document.getElementById("output");

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const priorityInput = document.getElementById("priority");
const taskList = document.getElementById("task-list");

const sessionForm = document.getElementById("session-form");
const topicInput = document.getElementById("topic");
const durationInput = document.getElementById("duration");
const sessionList = document.getElementById("session-list");
const stats = document.getElementById("stats");

const loadQuoteBtn = document.getElementById("load-quote");
const quoteEl = document.getElementById("quote");
const statusEl = document.getElementById("quote-status");



let currentUser = Storage.load("user")
  ? new User(Storage.load("user")._name)
  : new User();

let taskManager = new TaskManager(
  Storage.load("tasks") ?? []
);

title.textContent = currentUser.greet();
renderTasks();

form.addEventListener("submit", e => {
  e.preventDefault();
  currentUser.name = input.value;
  Storage.save("user", currentUser);
  title.textContent = currentUser.greet();
});

taskForm.addEventListener("submit", e => {
  e.preventDefault();

  const title = taskInput.value.trim();

    if (!title) {
    alert("Task title cannot be empty");
    return;
    }

    taskManager.addTask(title, priorityInput.value);


  Storage.save("tasks", taskManager.tasks);
  taskInput.value = "";
  renderTasks();
});

taskList.addEventListener("click", e => {
  const id = Number(e.target.dataset.id);

  if (e.target.classList.contains("toggle")) {
    taskManager.toggleTask(id);
  }

  if (e.target.classList.contains("delete")) {
    taskManager.deleteTask(id);
  }

  Storage.save("tasks", taskManager.tasks);
  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = "";

  if (!Array.isArray(taskManager.tasks)) {
    taskList.textContent = "No tasks available";
    return;
  }

  taskManager.tasks.forEach(task => {
    if (!task?.title) return;

    const li = document.createElement("li");

    li.innerHTML = `
      <span style="text-decoration:${task.completed ? "line-through" : "none"}">
        ${task.title}
      </span>
      <button class="toggle" data-id="${task.id}">✔</button>
      <button class="delete" data-id="${task.id}">✖</button>
    `;

    taskList.appendChild(li);
  });
}

let tracker = new LearningTracker(
  Storage.load("sessions") ?? []
);

renderSessions();

sessionForm.addEventListener("submit", e => {
  e.preventDefault();

    const topic = topicInput.value.trim();
    const minutes = Number(durationInput.value);

    if (!topic || minutes <= 0) {
    alert("Invalid learning session");
    return;
    }

    tracker.addSession(topic, minutes); 

  Storage.save("sessions", tracker.sessions);

  topicInput.value = "";
  durationInput.value = "";

  renderSessions();
});

function renderSessions() {
  sessionList.innerHTML = "";

  tracker.sessions.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.date} - ${s.topic}: ${s.minutes} min`;
    sessionList.appendChild(li);
  });

  const total = tracker.getTotalMinutes();
  const byTopic = tracker.getMinutesByTopic();

  stats.innerHTML = `
    Total Study Time: ${total} minutes<br />
    ${Object.entries(byTopic)
      .map(([topic, mins]) => `${topic}: ${mins} min`)
      .join("<br />")}
  `;
}

loadQuoteBtn.addEventListener("click", async () => {
  statusEl.textContent = "Loading...";
  quoteEl.textContent = "";

  try {
    const quote = await fetchQuote();
    quoteEl.textContent = `"${quote.content}" — ${quote.author}`;
    statusEl.textContent = "Loaded successfully";
  } catch (error) {
    statusEl.textContent = "Failed to load quote";
  }
});

document.getElementById("reset").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

