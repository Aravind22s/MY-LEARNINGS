/* =======================
   STORAGE (DEFENSIVE)
======================= */
const Storage = {
  save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Storage save failed", e);
    }
  },
  load(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }
};

/* =======================
   USER (CLASS)
======================= */
class User {
  constructor(name = "Visitor") {
    this._name = name;
  }
  get name() {
    return this._name.toUpperCase();
  }
  set name(value) {
    this._name = value.trim();
  }
  greet() {
    return `Welcome, ${this.name}!`;
  }
}

let currentUser = Storage.load("user")
  ? new User(Storage.load("user")._name)
  : new User();

/* =======================
   TASK MANAGER (CLASS)
======================= */
class TaskManager {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  add(title, priority) {
    this.tasks.push({
      id: Date.now(),
      title,
      priority,
      completed: false
    });
  }

  toggle(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  delete(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}

const taskManager = new TaskManager(Storage.load("tasks") ?? []);

/* =======================
   LEARNING TRACKER
======================= */
class LearningTracker {
  constructor(sessions = []) {
    this.sessions = sessions;
  }

  add(topic, minutes) {
    this.sessions.push({
      id: Date.now(),
      topic,
      minutes,
      date: new Date().toLocaleDateString()
    });
  }

  totalMinutes() {
    return this.sessions.reduce((sum, s) => sum + s.minutes, 0);
  }

  byTopic() {
    return this.sessions.reduce((acc, s) => {
      acc[s.topic] = (acc[s.topic] ?? 0) + s.minutes;
      return acc;
    }, {});
  }
}

const tracker = new LearningTracker(Storage.load("sessions") ?? []);

/* =======================
   ASYNC API
======================= */
async function fetchAdvice() {
  const res = await fetch("https://api.adviceslip.com/advice");
  if (!res.ok) throw new Error("API failed");
  const data = await res.json();
  return data.slip.advice;
}

/* =======================
   DOM REFERENCES
======================= */
const title = document.getElementById("title");
const userForm = document.getElementById("user-form");
const nameInput = document.getElementById("name");

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const priorityInput = document.getElementById("priority");
const taskList = document.getElementById("task-list");

const sessionForm = document.getElementById("session-form");
const topicInput = document.getElementById("topic");
const durationInput = document.getElementById("duration");
const sessionList = document.getElementById("session-list");
const stats = document.getElementById("stats");

const quoteBtn = document.getElementById("load-quote");
const quoteEl = document.getElementById("quote");
const statusEl = document.getElementById("quote-status");

/* =======================
   INITIAL RENDER
======================= */
title.textContent = currentUser.greet();
renderTasks();
renderSessions();

/* =======================
   EVENTS
======================= */
userForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!nameInput.value.trim()) return;
  currentUser.name = nameInput.value;
  Storage.save("user", currentUser);
  title.textContent = currentUser.greet();
});

taskForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!taskInput.value.trim()) return;
  taskManager.add(taskInput.value.trim(), priorityInput.value);
  Storage.save("tasks", taskManager.tasks);
  taskInput.value = "";
  renderTasks();
});

taskList.addEventListener("click", e => {
  const id = Number(e.target.dataset.id);
  if (e.target.classList.contains("toggle")) taskManager.toggle(id);
  if (e.target.classList.contains("delete")) taskManager.delete(id);
  Storage.save("tasks", taskManager.tasks);
  renderTasks();
});

sessionForm.addEventListener("submit", e => {
  e.preventDefault();
  const minutes = Number(durationInput.value);
  if (!topicInput.value.trim() || minutes <= 0) return;
  tracker.add(topicInput.value.trim(), minutes);
  Storage.save("sessions", tracker.sessions);
  topicInput.value = "";
  durationInput.value = "";
  renderSessions();
});

quoteBtn.addEventListener("click", async () => {
  statusEl.textContent = "Loading...";
  try {
    const advice = await fetchAdvice();
    quoteEl.textContent = advice;
    statusEl.textContent = "Loaded";
  } catch {
    statusEl.textContent = "Failed";
  }
});

/* =======================
   RENDER FUNCTIONS
======================= */
function renderTasks() {
  taskList.innerHTML = "";
  taskManager.tasks.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span style="text-decoration:${t.completed ? "line-through" : "none"}">
        ${t.title} (${t.priority})
      </span>
      <button class="toggle" data-id="${t.id}">✔</button>
      <button class="delete" data-id="${t.id}">✖</button>
    `;
    taskList.appendChild(li);
  });
}

function renderSessions() {
  sessionList.innerHTML = "";
  tracker.sessions.forEach(s => {
    const li = document.createElement("li");
    li.textContent = `${s.date} - ${s.topic}: ${s.minutes} min`;
    sessionList.appendChild(li);
  });

  const total = tracker.totalMinutes();
  const byTopic = tracker.byTopic();

  stats.innerHTML = `
    Total: ${total} minutes<br/>
    ${Object.entries(byTopic).map(
      ([t, m]) => `${t}: ${m} min`
    ).join("<br/>")}
  `;
}

// RESET BUTTON EVENT
document.getElementById("reset").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});
