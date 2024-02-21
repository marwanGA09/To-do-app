import "./style/style.scss";
import { projectItems } from "./integrate/projectCon";
import { addItem } from "./integrate/taskCreator.js";
import { TaskCard } from "./dom/createTaskCard.js";
import "./integrate/createCardContainer.js";

const removeLocalStorage = document.querySelector(".removeLocalStorage");
removeLocalStorage.addEventListener("click", () => {
  console.log("remove Local storage");
  localStorage.clear();
  window.location.reload();
});
