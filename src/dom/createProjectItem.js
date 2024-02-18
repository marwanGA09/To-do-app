export class CreateProjectItem {
  constructor() {}
  #createAddBtn() {
    const btn = document.createElement("button");
    btn.textContent = "+";
    btn.classList.add("add-item");
    return btn;
  }
  #createSpan(content) {
    const span = document.createElement("span");
    span.textContent = content;
    return span;
  }
  createLI(content) {
    const li = document.createElement("li");
    li.classList.add("project-item");

    li.appendChild(this.#createSpan(content));
    li.appendChild(this.#createAddBtn());
    return li;
  }
}

// const li = new createProjectItem();
// console.log(li);
// const liItem = li.createLI("reading");
// console.log(liItem);
