import { Project } from "../app/Project";
import { TaskCard } from "../dom/createTaskCard";

// render Default
export function defaultRender() {
  const displayCard = document.querySelector(".card-display");

  let project0 = Project.setProjects[0].projectsItem;

  project0.forEach((obj) => {
    let card = TaskCard.createCard(obj);
    displayCard.appendChild(card);
  });
}
export function renderTasks(ev) {
  // console.log(ev);
  removeCards();
  const displayCard = document.querySelector(".card-display");
  let index = Number.isInteger(+ev) ? ev : ev.currentTarget.dataset.project;

  let currentProject = Project.setProjects[index].projectsItem;

  currentProject.forEach((obj) => {
    let card = TaskCard.createCard(obj);
    displayCard.appendChild(card);
  });
}

function removeCards() {
  const displayCard = document.querySelector(".card-display");
  const displays = document.querySelector(".display");
  displays.removeChild(displayCard);
  let newDisplayCard = document.createElement("div");
  newDisplayCard.classList.add("card-display");
  displays.appendChild(newDisplayCard);
}

function displayAllProject() {
  Project.setProjects.forEach((pro) => {
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
