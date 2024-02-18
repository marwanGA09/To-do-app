export class CreateProjectItem {
  constructor() {}
  #createAddBtn(index) {
    const btn = document.createElement("button");
    btn.textContent = "+";
    btn.dataset.index = index - 1;
    btn.classList.add("add-item");
    return btn;
  }
  #createSpan(content) {
    const span = document.createElement("span");
    span.textContent = content;
    return span;
  }
  createLI(content, index) {
    const li = document.createElement("li");
    li.classList.add("project-item");

    li.appendChild(this.#createSpan(content));
    li.appendChild(this.#createAddBtn(index));
    return li;
  }
}

// const li = new createProjectItem();
// console.log(li);
// const liItem = li.createLI("reading");
// console.log(liItem);
