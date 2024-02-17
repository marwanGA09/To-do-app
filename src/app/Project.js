class Project {
  static #projects = [];
  #name;
  #projectItems;
  constructor(name) {
    this.#name = name;
    this.#projectItems = [];
    Project.projects = this;
  }

  static set projects(obj) {
    Project.#projects.push(obj);
  }
  static get projects() {
    return Project.#projects;
  }

  set projectsItem(itemObj) {
    this.#projectItems.push(itemObj);
  }
  get projectsItem() {
    return this.#projectItems;
  }
}

const project1 = new Project("study");
console.log(project1);
