export class Project {
  static #projects = [];
  static #projectNames = [];
  #name;
  #projectItems;
  constructor(name) {
    this.#name = name;
    this.#projectItems = [];
    Project.setProjects = this;
    Project.setProjectsName = this.#name;
  }

  static set setProjectsName(obj) {
    Project.#projectNames.push(obj);
  }

  static set setProjects(obj) {
    Project.#projects.push(obj);
  }
  static get setProjects() {
    return Project.#projects;
  }

  getOriginalProjectItem() {
    return this.#projectItems;
  }
  setOriginalProjectItem() {
    localStorage.setItem(`${this.#name}`, JSON.stringify(this.#projectItems));
  }

  set projectsItem(itemObj) {
    this.#projectItems.push(itemObj);
    localStorage.setItem(
      "localStorageKey",
      JSON.stringify(Project.#projectNames)
    );
    localStorage.setItem(`${this.#name}`, JSON.stringify(this.#projectItems));
  }
  get projectsItem() {
    // return this.#projectItems;
    if (localStorage.getItem(`${this.#name}`)) {
      // console.log("*** from local storage");
      // console.log(
      //   "with in getProjectItem",
      //   JSON.parse(localStorage.getItem(`${this.#name}`))
      // );
      return JSON.parse(localStorage.getItem(`${this.#name}`));
    }
    // else {
    //   console.log("*** from if there no local storage");
    //   console.log(this.#projectItems);
    //   return this.#projectItems;
    // }
  }

  get name() {
    return this.#name;
  }
}
