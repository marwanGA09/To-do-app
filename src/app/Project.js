export class Project {
  static #projects = [];
  #name;
  #projectItems;
  constructor(name) {
    this.#name = name;
    this.#projectItems = [];
    Project.setProjects = this;
  }

  static set setProjects(obj) {
    Project.#projects.push(obj);
  }
  static get setProjects() {
    return Project.#projects;
  }

  set projectsItem(itemObj) {
    this.#projectItems.push(itemObj);
    localStorage.setItem(`${this.#name}`, JSON.stringify(this.#projectItems));
  }
  get projectsItem() {
    // return this.#projectItems;
    return JSON.parse(localStorage.getItem(`${this.#name}`));
  }

  get name() {
    return this.#name;
  }
}
