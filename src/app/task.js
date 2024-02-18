export class TaskClass {
  #tittle;
  #description;
  #date;
  #category;
  #priority;
  #isDone;
  constructor(tittle, description = "", date, category, priority = 3) {
    this.#tittle = tittle;
    this.#description = description;
    this.#date = date;
    this.#category = category;
    this.#priority = priority;
    this.#isDone = false;
  }
  isDone() {
    this.#isDone = this.#isDone ? false : true;
  }
}

const item1 = new TaskClass("read", "lkdjfskl", "jun 3:2022", "study", 2);
const item2 = new TaskClass("reading", "lkdjfskl", "jun 3:2022", "study", 2);
console.log(item1);
