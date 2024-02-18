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
  isDoneChanger() {
    this.#isDone = this.#isDone ? false : true;
  }
  get isDone() {
    return this.#isDone;
  }
  get tittle() {
    return this.#tittle;
  }
  get date() {
    return this.#date;
  }
  get category() {
    return this.#category;
  }

  getObject() {
    return {
      tittle: this.tittle,
      date: this.date.toLocaleDateString(),
      time: this.date.toLocaleTimeString(),
      category: this.category,
      isDone: this.isDone,
    };
  }
}

// const item1 = new TaskClass("read", "lkdjfskl", "jun 3:2022", "study", 2);
// const item2 = new TaskClass("reading", "lkdjfskl", "jun 3:2022", "study", 2);
// console.log(item1);
