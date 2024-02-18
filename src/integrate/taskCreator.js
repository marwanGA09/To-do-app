import { Project } from "../app/Project";
import { TaskClass } from "./../app/task.js";

function createTaskFunction(ev) {
  const currentProject = Project.projects[ev.target.dataset.index];
  //   console.log(currentProject);
  const task = new TaskClass(
    "Read Top",
    "Dom manipulation and its application",
    new Date(),
    currentProject.name,
    2
  );
  currentProject.projectsItem = task;
  // console.log(currentProject.projectsItem);
}

export function addItemEventLister(addItem) {
  addItem.forEach((item) => item.addEventListener("click", createTaskFunction));
}
