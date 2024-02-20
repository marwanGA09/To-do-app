import { Project } from "../app/Project";
import { TaskCard } from "../dom/createTaskCard";

// render Default
export function defaultRender() {
  const displayCard = document.querySelector(".card-display");
  let local = JSON.parse(
    localStorage.getItem(`${Project.projects[0].name.toLowerCase()}`)
  );
  let project0;
  if (local) {
    project0 = local;
  } else {
    project0 = Project.projects[0].projectsItem;
  }

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
  let local = JSON.parse(
    localStorage.getItem(`${Project.projects[index].name.toLowerCase()}`)
  );

  let currentProject = local ? local : Project.projects[index].projectsItem;

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
