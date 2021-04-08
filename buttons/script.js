// javascript

const submit = document.querySelector(".submit-btn");
const cancel = document.querySelector(".cancel-btn");
const submitted = document.querySelector(".submitted");
const form = document.querySelector("form");
const label = document.querySelector("label");
const thanks = document.getElementById("thanks");
const sweetlady = document.getElementById("sweetlady");
const overlord = document.querySelector(".overlord");

submit.addEventListener("click", function () {
  submit.classList.toggle("hide");
  cancel.classList.remove("hide");
  form.classList.toggle("hide");
  document.querySelector("body").style.backgroundColor = "#70faae";
  submitted.classList.toggle("hide");
  let name = document.getElementById("name").value;
  if (name) {
    thanks.innerText = `Thank you for your submission, ${name}. Click below if you've changed your mind.`;
  }
});

cancel.addEventListener("click", function () {
  submit.classList.toggle("hide");
  submitted.classList.toggle("hide");
  cancel.classList.toggle("hide");
  document.querySelector("body").style.backgroundColor = "#fff";
  form.classList.toggle("hide");
  label.innerText = "What would you like to be called now?";
});

sweetlady.addEventListener("click", function () {
  overlord.classList.toggle("hide");
  // cancel.classList.toggle("hide")
});
