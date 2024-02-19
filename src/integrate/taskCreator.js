import { Project } from "../app/Project";
import { TaskClass } from "./../app/task.js";
import { renderTasks } from "./createCardContainer.js";

function createTaskFunction(ev) {
  const modal = document.querySelector(".modal");
  const formData = document.querySelector(".item-form");
  const addTask = document.querySelector(".add-task");

  const cancelTask = document.querySelector(".cancel-task");
  modal.showModal();
  // console.log(cancelTask);
  cancelTask.addEventListener("click", () => {
    modal.close();
    // console.log("close task");
  });

  addTask.addEventListener("click", () => {
    // console.log("add task");
    let dataInput = Object.fromEntries(new FormData(formData));
    // console.log("before", dataInput, dataInput.tittle);
    if (dataInput.tittle != "") {
      // console.log("after", dataInput);

      const currentProject = Project.projects[ev.target.dataset.index];
      const task = new TaskClass(
        dataInput.tittle,
        dataInput.description,
        new Date(dataInput["due-date"]),
        currentProject.name,
        dataInput.priority
      );
      console.log(task);
      console.log(Project.projects);
      currentProject.projectsItem = task.getObject();
      renderTasks(ev.target.dataset.index);
    }
  });
}

export function addItemEventLister(addItem) {
  addItem.forEach((item) => item.addEventListener("click", createTaskFunction));
}

// createTaskFunction();
