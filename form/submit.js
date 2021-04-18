const btn = document.querySelector(".btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const formContainer = document.querySelector(".form__container");
// const bike = document.querySelector(".bike__container")

btn.addEventListener("click", function () {
  randomiser();
  gradientChange();
});
// bike.addEventListener("click", function(){
//     randomiser()
//     gradientChange()
// })

randomiser = () => {
  rando1 = Math.floor(Math.random() * 360);
  rando2 = Math.floor(Math.random() * 360);
  rando3 = Math.floor(Math.random() * 360);
  rando4 = rando3 + 180;
};

gradientChange = () => {
  formContainer.style.backgroundImage = `linear-gradient(135deg, hsl(${rando1}, 100%, 50%), hsl(${rando2}, 50%, 50%))`;
  btn.style.backgroundColor = `hsl(${rando3}, 50%, 50%)`;
  btn.style.color = `hsl(${rando4}, 100%, 50%)`;
};
