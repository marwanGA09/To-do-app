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
  }
  get projectsItem() {
    return this.#projectItems;
  }

  get name() {
    return this.#name;
  }
}
