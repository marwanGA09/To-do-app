export class TaskClass {
  #tittle;
  #description;
  #date;
  #category;
  #priority;
  #isDone;
  constructor(
    tittle,
    description = "",
    date,
    category,
    priority = 3,
    isDone = false
  ) {
    this.#tittle = tittle;
    this.#description = description;
    this.#date = date;
    this.#category = category;
    this.#priority = priority;
    this.#isDone = isDone;
  }
  isDoneChanger() {
    this.isDone = this.isDone ? false : true;
  }
  get isDone() {
    return this.#isDone;
  }
  set isDone(val) {
    this.#isDone = val;
  }
  get tittle() {
    return this.#tittle;
  }
  get description() {
    return this.#description;
  }
  get date() {
    return this.#date;
  }
  get category() {
    return this.#category;
  }
  get priority() {
    return this.#priority;
  }

  getObject() {
    return {
      tittle: this.tittle,
      description: this.description,
      date: this.date.toDateString(),
      time: this.date.toLocaleTimeString(),
      dueDate: this.date,
      category: this.category,
      isDone: this.isDone,
      priority: this.priority,
      isDoneChanger: this.isDoneChanger,
    };
  }
}
