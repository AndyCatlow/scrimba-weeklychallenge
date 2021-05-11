const fireworksBtn = document.querySelector(".btn-fireworks");
const fireworksContainer = document.querySelector(".firework");
const fireworksEscape = document.querySelector(".btn-escape");

fireworksBtn.addEventListener("click", function () {
  fireworksContainer.classList.remove("hide");
});

fireworksEscape.addEventListener("click", function () {
  fireworksContainer.classList.add("hide");
});

console.log(fireworksBtn);
