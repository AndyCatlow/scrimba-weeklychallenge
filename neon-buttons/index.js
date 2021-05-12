const fireworksBtn = document.querySelector(".btn-fireworks");
const fireworksContainer = document.querySelector(".firework");
const fireworksEscape = document.querySelector(".btn-escape");
const rainBtn = document.querySelector(".btn-rain");
const catContainer = document.querySelector(".cat-container");

fireworksBtn.addEventListener("click", function () {
  fireworksContainer.classList.remove("hide");
});

fireworksEscape.addEventListener("click", function () {
  fireworksContainer.classList.add("hide");
});

rainBtn.addEventListener("click", function () {
  catContainer.classList.toggle("hide");
});
