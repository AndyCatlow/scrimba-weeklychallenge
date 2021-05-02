const openArrow = document.querySelector(".open-menu");
const container = document.querySelector(".container");
const nav = document.querySelector(".nav");
const closeArrow = document.querySelector(".close-menu");
const llama = document.getElementById("llama");

openArrow.addEventListener("click", function (e) {
  container.classList.toggle("inactive-container");
  nav.classList.toggle("active-nav");
});

closeArrow.addEventListener("click", function (e) {
  container.classList.toggle("inactive-container");
  nav.classList.toggle("active-nav");
});

llama.addEventListener("click", function (e) {
  let random = Math.floor(Math.random() * 10);
  llama.src = `./images/${random}.jpg`;
  console.log(llama.src);
});
