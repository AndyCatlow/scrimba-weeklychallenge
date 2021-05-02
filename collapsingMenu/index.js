const openArrow = document.querySelector(".open-menu");
const closeArrow = document.querySelector(".close-menu");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
const llama = document.getElementById("llama");

openArrow.addEventListener("click", () => {
  toggleNav();
});

closeArrow.addEventListener("click", () => {
  toggleNav();
});

let toggleNav = () => {
  container.classList.toggle("inactive-container");
  nav.classList.toggle("active-nav");
};

llama.addEventListener("click", () => {
  let random = Math.floor(Math.random() * 10);
  llama.src = `./images/${random}.jpg`;
});
