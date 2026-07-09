export class Storage {
  static save(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Storage save failed:", error);
    }
  }

  static load(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error("Storage load failed:", error);
      return null;
    }
  }

  static clear(key) {
    localStorage.removeItem(key);
  }
}
