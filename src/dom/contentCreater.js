export function contentCreator(innerText, tag, classes) {
  const ele = document.createElement(tag);
  ele.innerHTML = innerText;
  ele.classList.add(classes);
  return ele;
}
