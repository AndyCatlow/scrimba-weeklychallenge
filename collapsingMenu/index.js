const openArrow = document.querySelector(".open-menu");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
const closeArrow = document.querySelector(".close-menu");

console.log(container);
openArrow.addEventListener("click", function (e) {
  container.classList.toggle("inactive-container");
  nav.classList.toggle("active-nav");
});

closeArrow.addEventListener("click", function (e) {
  container.classList.toggle("inactive-container");
  nav.classList.toggle("active-nav");
});
