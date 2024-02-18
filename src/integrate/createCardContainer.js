import { Project } from "../app/Project";
import { TaskCard } from "../dom/createTaskCard";

export function renderTasks(ev) {
  const displayCard = document.querySelector(".card-display");
  const currentProject =
    Project.projects[ev.currentTarget.dataset.project].projectsItem;
  // console.log(currentProject);
  currentProject.forEach((obj) => {
    let card = TaskCard.createCard(obj);
    displayCard.appendChild(card);
  });
}

function displayAllProject() {
  Project.projects.forEach((pro) => {
    console.log(pro);
    let pros = pro.projectsItem;
    console.log(pros);
    pros.forEach((obj) => {
      let card = TaskCard.createCard(obj);
      displayCard.appendChild(card);
    });
  });
}

// displayAllProject();
