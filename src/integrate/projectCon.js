import { Project } from "../app/Project";
import { CreateProjectItem } from "../dom/createProjectItem";

export const projectItems = document.querySelector(".project-items");
export function createProjectItemFunction(projectObjectName) {
  const project1 = new Project(projectObjectName);
  const ul = new CreateProjectItem().createLI(project1.name);
  projectItems.appendChild(ul);
}

createProjectItemFunction("Study");
createProjectItemFunction("Shopping");
createProjectItemFunction("Entertainment");
