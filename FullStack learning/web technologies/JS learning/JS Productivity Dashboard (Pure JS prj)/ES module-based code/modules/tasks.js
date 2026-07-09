export class TaskManager {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  addTask(title, priority) {
    this.tasks.push({
      id: Date.now(),
      title,
      priority,
      completed: false
    });
  }

  toggleTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  deleteTask(id) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}
