import itemsTemplate from "./templates/gallery-item.hbs";
import menu from "./menu.json";
console.log(menu);

console.log(itemsTemplate);

const markup = itemsTemplate(menu);
console.log(markup);

const ref = {
  menu: document.querySelector(".menu"),
};

ref.menu.insertAdjacentHTML("beforeend", markup);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const refs = {
  body: document.querySelector("body"),
  input: document.querySelector("input.js-switch-input"),
};

refs.input.addEventListener("change", themeChange);
refs.body.classList.add(Theme.LIGHT);

function themeChange(event) {
  console.dir(refs.body);

  if (refs.body.classList.contains(Theme.LIGHT)) {
    console.log(true);

    refs.body.classList.remove(Theme.LIGHT);
    console.dir(refs.body);
    refs.body.classList.add(Theme.DARK);
  } else if (refs.body.classList.contains(Theme.DARK)) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  }
  const bodyClass = localStorage.setItem("theme", refs.body.className);

  console.dir(event.target);
}
