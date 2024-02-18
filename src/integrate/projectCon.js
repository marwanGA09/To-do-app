import { Project } from "../app/Project";
import { TaskClass } from "../app/task";
import { CreateProjectItem } from "../dom/createProjectItem";
import { defaultRender, renderTasks } from "./createCardContainer";
import { addItemEventLister } from "./taskCreator";

const projectItems = document.querySelector(".project-items");
export function createProjectItemFunction(projectObjectName) {
  const project1 = new Project(projectObjectName);
  const ul = new CreateProjectItem().createLI(
    project1.name,
    Project.projects.length
  );
  projectItems.appendChild(ul);

  let addItems = document.querySelectorAll(".add-item");
  addItemEventLister(addItems);

  const projectItemsArray = document.querySelectorAll(".project-item");
  projectItemsArray.forEach((item) => {
    item.addEventListener("click", renderTasks);
  });
  // renderTasks(projectItemsArray);
}

function createProjectEvent() {
  const addDialog2 = document.querySelector(".add-dialog2");
  addDialog2.addEventListener("click", (ev) => {
    const inp = document.querySelector("#dialog2");
    if (inp.value) {
      createProjectItemFunction(inp.value);
    }
    inp.value = "";
    dialog2.close();
  });
}

const addProject = document.querySelector(".add-project");
const dialog2 = document.querySelector(".dialog2");
addProject.addEventListener("click", (ev) => {
  dialog2.showModal();
  createProjectEvent();
  document.querySelector(".cancel-modal").addEventListener("click", () => {
    dialog2.close();
  });
});

// console.log(addProject);
// console.log(dialog2);
createProjectItemFunction("Study");
createProjectItemFunction("Shopping");
createProjectItemFunction("Entertainment");

for (let i = 0; i < Project.projects.length; i++) {
  for (let j = 0; j < 4; j++) {
    const task = new TaskClass(
      `Read Top ${i} ${j}`,
      "Dom manipulation and its application",
      new Date(),
      Project.projects[i].name,
      2
    );
    Project.projects[i].projectsItem = task.getObject();
    // console.log(`Task is created  ${i} ${j}`);
  }
}

defaultRender();
