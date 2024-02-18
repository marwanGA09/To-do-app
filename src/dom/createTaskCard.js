export class TaskCard {
  static createCard(obj) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.priority = obj;
    card.appendChild(TaskCard.#createTittleSpan(obj));
    card.appendChild(TaskCard.#createTimeSpan(obj)); // need some code
    card.appendChild(TaskCard.#createDateSpan(obj)); // need some code
    card.appendChild(TaskCard.#createEditBtn());
    card.appendChild(TaskCard.#createDeleteBtn());
    return card;
  }
  static #createTittleSpan(tittle) {
    const tit = document.createElement("span");
    tit.classList.add("tittle-elm");
    tit.textContent = tittle;
    return tit;
  }
  static #createTimeSpan(dateValue) {
    const time = document.createElement("span");
    time.classList.add("time-elm");
    time.textContent = dateValue; // change time
    return time;
  }
  static #createDateSpan(dateValue) {
    const date = document.createElement("span");
    date.classList.add("date-elm");
    date.textContent = dateValue; // change to date only
    return date;
  }
  static #createEditBtn() {
    const btn = document.createElement("button");
    btn.classList.add("btn-edit-elm");
    btn.textContent = "Edit 🛠️"; // change to btn only
    return btn;
  }
  static #createIsDone(isDone) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "is-done";
    input.checked = isDone;
    return input;
  }
  static #createDeleteBtn() {
    const btn = document.createElement("button");
    btn.classList.add("btn-del-elm");
    btn.textContent = "Delete 🚫";
    return btn;
  }
}
