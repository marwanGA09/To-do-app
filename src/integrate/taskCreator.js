import { Project } from "../app/Project";
import { TaskClass } from "./../app/task.js";
import { renderTasks } from "./createCardContainer.js";

function createTaskFunction(ev) {
  let currentIndex = ev.target.dataset.index;
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

  addTask.addEventListener(
    "click",
    () => {
      // console.log("add task");
      let dataInput = Object.fromEntries(new FormData(formData));
      clearForm(modal);
      // console.log("before", dataInput, dataInput.tittle);
      if (dataInput.tittle != "") {
        // console.log("after", dataInput);

        const currentProject = Project.projects[currentIndex];
        const task = new TaskClass(
          dataInput.tittle,
          dataInput.description,
          new Date(dataInput["due-date"]),
          currentProject.name,
          dataInput.priority
        );
        // console.log(task);
        currentProject.projectsItem = task.getObject();
        // console.log(currentProject);
        renderTasks(currentIndex);
      }
    },
    { once: true }
  );
}

export function addItemEventLister(addItem) {
  addItem.forEach((item) => item.addEventListener("click", createTaskFunction));
}

// createTaskFunction();

function clearForm(modal) {
  const tittle = document.querySelector("#tittle");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#due-date");
  tittle.value = "";
  description.value = "";
  dueDate.value = "";
  modal.close();
}
