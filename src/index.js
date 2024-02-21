import "./style/style.scss";
import "./integrate/projectCon";

const removeLocalStorage = document.querySelector(".removeLocalStorage");
removeLocalStorage.addEventListener("click", () => {
  console.log("remove Local storage");
  localStorage.clear();
  window.location.reload();
});
