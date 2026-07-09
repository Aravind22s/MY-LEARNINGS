export class User {
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
