import { Project } from "../app/Project";

const projectItems = document.querySelectorAll(".project-item");
projectItems.forEach((it) => {
  it.addEventListener("click", (ev) => {
    //   console.log(projectItems);
    console.log(ev.currentTarget);
  });
});

const display = document.querySelector(".display");
const currentProject = Project.projects[0].projectsItem;
// for(let key of c)
let stringified = JSON.stringify(currentProject);
console.log(JSON.parse(stringified));
console.log(currentProject);
