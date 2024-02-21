import { Project } from "../app/Project";
import { renderTasks } from "./createCardContainer.js";

function createTaskFunction(ev) {
  let currentIndex = ev.target.dataset.index;
  const modal = document.querySelector(".modal");
  const formData = document.querySelector(".item-form");
  const addTask = document.querySelector(".add-task");

  const cancelTask = document.querySelector(".cancel-task");
  modal.showModal();
  cancelTask.addEventListener("click", () => {
    modal.close();
  });

  addTask.addEventListener(
    "click",
    () => {
      let dataInput = Object.fromEntries(new FormData(formData));
      clearForm(modal);
      if (dataInput.tittle != "") {
        const currentProject = Project.setProjects[currentIndex];
        import("./../app/task.js").then(({ TaskClass }) => {
          const task = new TaskClass(
            dataInput.tittle,
            dataInput.description,
            new Date(dataInput["due-date"]),
            currentProject.name,
            dataInput.priority
          );
          currentProject.projectsItem = task.getObject();
          renderTasks(currentIndex);
        });
      }
    },
    { once: true }
  );
}

export function addItemEventLister(addItem) {
  addItem.forEach((item) => item.addEventListener("click", createTaskFunction));
}

function clearForm(modal) {
  const tittle = document.querySelector("#tittle");
  const description = document.querySelector("#description");
  const dueDate = document.querySelector("#due-date");
  tittle.value = "";
  description.value = "";
  dueDate.value = "";
  modal.close();
}
