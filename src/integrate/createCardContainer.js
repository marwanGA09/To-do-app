const projectItems = document.querySelectorAll(".project-item");
projectItems.forEach((it) => {
  it.addEventListener("click", (ev) => {
    //   console.log(projectItems);
    console.log(ev.currentTarget);
  });
});
